"use client";

import { ReactNode, useRef } from "react";

type PageScrollerProps = {
  children: ReactNode;
};

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function animateScroll(
  container: HTMLElement,
  targetTop: number,
  duration = 1100
) {
  const startTop = container.scrollTop;
  const distance = targetTop - startTop;
  const startTime = performance.now();

  function animate(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    container.scrollTop = startTop + distance * eased;

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

export function PageScroller({ children }: PageScrollerProps) {
  const isAnimating = useRef(false);

  const handleWheel = (event: React.WheelEvent<HTMLElement>) => {
    const container = event.currentTarget;
    const sections = Array.from(
      container.querySelectorAll<HTMLElement>("[data-section]")
    );

    if (sections.length === 0) return;

    event.preventDefault();

    if (isAnimating.current) return;

    const currentScroll = container.scrollTop;
    const currentIndex = sections.reduce((closestIndex, section, index) => {
      const currentDistance = Math.abs(
        sections[closestIndex].offsetTop - currentScroll
      );
      const newDistance = Math.abs(section.offsetTop - currentScroll);

      return newDistance < currentDistance ? index : closestIndex;
    }, 0);

    const direction = event.deltaY > 0 ? 1 : -1;
    const nextIndex = Math.min(
      Math.max(currentIndex + direction, 0),
      sections.length - 1
    );

    if (nextIndex === currentIndex) return;

    isAnimating.current = true;

    animateScroll(container, sections[nextIndex].offsetTop, 1150);

    window.setTimeout(() => {
      isAnimating.current = false;
    }, 1200);
  };

  return (
    <main
      id="page-scroll"
      className="h-screen overflow-y-auto overscroll-contain bg-black text-white"
      onWheel={handleWheel}
    >
      {children}
    </main>
  );
}