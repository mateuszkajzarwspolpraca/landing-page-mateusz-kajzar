/**
 * Strona 404. Next.js pokazuje ją, gdy ktoś wejdzie na adres, który nie istnieje.
 */
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-page px-5 text-white">
      <div className="max-w-xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-light">
          404
        </p>

        <h1 className="mt-4 text-4xl font-black">
          Nie znaleziono tej strony.
        </h1>

        <p className="mt-4 text-neutral-400">
          Wygląda na to, że adres jest nieprawidłowy albo strona została
          przeniesiona.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex rounded-md bg-brand px-6 py-3 text-sm font-black transition hover:bg-brand-light"
        >
          Wróć na stronę główną
        </Link>
      </div>
    </main>
  );
}