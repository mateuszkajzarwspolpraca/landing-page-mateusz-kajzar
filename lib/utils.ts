import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Skleja klasy Tailwinda w jeden napis i usuwa konflikty.
 *
 * Przykład: cn("px-4 text-white", isActive && "text-red-500")
 * → gdy isActive jest true, wynik to "px-4 text-red-500" (późniejsza klasa wygrywa).
 * Wartości false/undefined są pomijane, więc łatwo dodawać klasy warunkowo.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
