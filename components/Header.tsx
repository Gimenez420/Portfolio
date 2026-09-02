import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-8 py-6">
      <Link
        href="/"
        className="text-xl font-bold tracking-tight text-purple-500 transition hover:text-purple-400"
      >
        RG
      </Link>

      <nav className="flex items-center gap-8 text-sm text-gray-400">
        <Link
          href="/"
          className="transition hover:text-white"
        >
          Inicio
        </Link>

        <a
          href="#proyectos"
          className="transition hover:text-white"
        >
          Proyectos
        </a>

        <a
          href="#cv"
          className="transition hover:text-white"
        >
          CV
        </a>

        <a
          href="#contacto"
          className="transition hover:text-white"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}