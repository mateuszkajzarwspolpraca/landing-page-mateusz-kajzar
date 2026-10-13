"use client";

/**
 * Film z YouTube (np. VSL), który wczytuje się dopiero po kliknięciu.
 *
 * Zanim ktoś kliknie, widać tylko lokalne zdjęcie (poster) z przyciskiem „play”.
 * Dzięki temu:
 * - strona ładuje się szybko (odtwarzacz YouTube waży kilkaset KB),
 * - do Google nic nie trafia, dopóki użytkownik sam nie włączy filmu (RODO).
 * Po kliknięciu wstawiamy odtwarzacz z domeny youtube-nocookie.com, który rusza od razu.
 *
 * Kliknięcie wysyła do Google Tag Managera zdarzenie `video_play` (pole `video_id`).
 */

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type VideoEmbedProps = {
  /** ID filmu z YouTube: część linku po /shorts/ albo po ?v= (np. "djGXojuZ3FY"). */
  videoId: string;
  /** Tytuł filmu dla czytników ekranu i jako podpis odtwarzacza. */
  title: string;
  /** Zdjęcie widoczne przed kliknięciem (ścieżka w public/). */
  poster: string;
  /** Napis na przycisku, np. „Zobacz, jak pracuję”. */
  label?: string;
  /** Proporcje filmu: pionowy (Shorts) albo poziomy. */
  orientation?: "vertical" | "horizontal";
  className?: string;
};

export function VideoEmbed({
  videoId,
  title,
  poster,
  label = "Obejrzyj film",
  orientation = "vertical",
  className,
}: VideoEmbedProps) {
  // false = pokazujemy poster, true = wstawiamy odtwarzacz YouTube.
  const [playing, setPlaying] = useState(false);

  const start = () => {
    trackEvent({ event: "video_play", video_id: videoId });
    setPlaying(true);
  };

  // Parametry odtwarzacza: autoplay (rusza od razu po kliknięciu), playsinline (na iPhonie nie otwiera
  // pełnego ekranu na siłę), rel=0 (na końcu podpowiada tylko Twoje filmy, nie obce).
  const src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0`;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-white/10 bg-black",
        orientation === "vertical" ? "aspect-[9/16]" : "aspect-video",
        className
      )}
    >
      {playing ? (
        <iframe
          src={src}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button type="button" onClick={start} className="group absolute inset-0 h-full w-full text-left" aria-label={`Odtwórz film: ${title}`}>
          <Image src={poster} alt="" fill priority sizes="(min-width: 1024px) 380px, 90vw" className="object-cover" />
          {/* Przyciemnienie od dołu, żeby napis był czytelny */}
          <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />
          {/* Okrągły przycisk play na środku */}
          <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-600 shadow-[0_0_60px_rgba(239,35,42,0.55)] transition duration-300 group-hover:scale-110">
            <Play className="ml-1 h-9 w-9 fill-white text-white" />
          </span>
          <span className="absolute inset-x-0 bottom-0 p-5">
            <span className="block text-lg font-black text-white">{label}</span>
            <span className="mt-1 block text-xs text-white/60">Film wczyta się z YouTube po kliknięciu.</span>
          </span>
        </button>
      )}
    </div>
  );
}
