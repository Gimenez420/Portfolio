import Link from "next/link";

export default function Footer() {
    return (
    <footer className="border-t border-gray-800">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-8 py-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
        <p>
            © 2026 Ricardo Giménez Valero
        </p>

        <div className="flex gap-6">
            <a
            href="https://github.com/gimenez420"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
            >
            GitHub
            </a>

            <a
            href="https://www.linkedin.com/in/ricardo-gimenez-valero-553217342/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
            >
            LinkedIn
            </a>

            <Link
            href="#contacto"
            className="transition hover:text-white"
            >
            Contacto
            </Link>
        </div>
        </div>
    </footer>
    );
}