"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => window.clearTimeout(timeout);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-6">
        <Image
          src="/images/logo/logo.png"
          alt="Mateusz Kajzar"
          width={96}
          height={96}
          priority
          className="h-24 w-24 animate-pulse object-contain"
        />

        <div className="h-1 w-40 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-[loader_1s_ease-in-out_infinite] rounded-full bg-red-600" />
        </div>

        <p className="text-xs font-black uppercase tracking-[0.28em] text-white/70">
          Proste zasady. Widoczne efekty.
        </p>
      </div>
    </div>
  );
}