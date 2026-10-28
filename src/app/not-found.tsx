import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#007DFF]">
        404
      </p>
      <h1 className="font-display mt-3 text-3xl font-bold text-[#0A1640]">
        Página no encontrada
      </h1>
      <p className="mt-2 max-w-md text-sm font-medium text-slate-600">
        El enlace no existe o fue movido.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#007DFF] px-6 text-sm font-bold text-white"
      >
        Ir al inicio
      </Link>
    </main>
  );
}
