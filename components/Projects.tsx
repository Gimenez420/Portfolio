export default function Projects() {
    return (
    <section
        id="proyectos"
        className="mx-auto w-full max-w-6xl px-8 py-10"
    >
        <div className="mb-12">
        <p className="text-sm font-semibold tracking-[0.25em] text-purple-400">
            PROYECTOS
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight">
            Cosas que he construido o trabajado
        </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <article className="group rounded-2xl border border-gray-800 bg-gray-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-500">
            <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-bold">
                GraffIdeas
            </h3>

            <span className="text-sm text-purple-400">
                2026
            </span>
            </div>

            <p className="mt-4 leading-relaxed text-gray-400">
            Proyecto web orientado a la creación de ideas de
            graffiti y al aprendizaje paso a paso.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-gray-800 px-3 py-1 text-sm text-gray-300">
                Next.js
            </span>

            <span className="rounded-full border border-gray-800 px-3 py-1 text-sm text-gray-300">
                TypeScript
            </span>

            <span className="rounded-full border border-gray-800 px-3 py-1 text-sm text-gray-300">
                Tailwind CSS
            </span>
            </div>

            <a
            href="https://github.com/gimenez420"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block text-sm font-semibold text-purple-400 transition hover:text-purple-300"
            >
            Ver en GitHub →
            </a>
        </article>

        <article className="group rounded-2xl border border-gray-800 bg-gray-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-500">
            <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-bold">
                CliniWin
            </h3>

            <span className="text-sm text-purple-400">
                2024
            </span>
            </div>

            <p className="mt-4 leading-relaxed text-gray-400">
            Aplicación de gestión para clínicas dentales en la que
            participé como programador junior en C#.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-gray-800 px-3 py-1 text-sm text-gray-300">
                C#
            </span>

            <span className="rounded-full border border-gray-800 px-3 py-1 text-sm text-gray-300">
                Programación
            </span>
            </div>

            <p className="mt-7 text-sm text-gray-500">
            Proyecto profesional
            </p>
        </article>
        </div>
    </section>
    );
}