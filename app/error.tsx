"use client";

import { AlertTriangle, ArrowLeft, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-5 text-white">
      <div className="w-full max-w-xl rounded-lg border border-red-500/30 bg-[#111111]/80 p-6 text-center shadow-[0_0_80px_rgba(239,35,42,0.12)] backdrop-blur">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-red-500/30 bg-red-600/10 text-red-500">
          <AlertTriangle className="h-8 w-8" />
        </div>

        <p className="mt-6 text-sm font-black uppercase tracking-[0.22em] text-red-500">
          Coś poszło nie tak
        </p>

        <h1 className="mt-4 text-4xl font-black leading-tight">
          Strona chwilowo nie może się załadować.
        </h1>

        <p className="mt-4 text-sm leading-6 text-neutral-400">
          Spróbuj odświeżyć widok. Jeśli problem się powtórzy, wróć na stronę
          główną i skontaktuj się ze mną bezpośrednio.
        </p>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center gap-3 rounded-md bg-red-600 px-5 py-3 text-sm font-black transition hover:bg-red-500"
          >
            Spróbuj ponownie
            <RefreshCw className="h-4 w-4" />
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-3 rounded-md border border-red-600 bg-black/20 px-5 py-3 text-sm font-black transition hover:bg-red-600"
          >
            Wróć na stronę główną
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}