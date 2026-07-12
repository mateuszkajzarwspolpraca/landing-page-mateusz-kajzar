import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-5 text-white">
      <div className="max-w-xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-red-500">
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
          className="mt-7 inline-flex rounded-md bg-red-600 px-6 py-3 text-sm font-black transition hover:bg-red-500"
        >
          Wróć na stronę główną
        </Link>
      </div>
    </main>
  );
}