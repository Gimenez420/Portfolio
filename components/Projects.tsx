    export default function Projects() {
    return (
    <section
        id="proyectos"
        className="mx-auto max-w-6xl px-8 py-20"
    >
        <div className="mb-10">
        <p className="text-sm font-semibold tracking-widest text-purple-400">
            PROYECTOS
        </p>

        <h2 className="mt-2 text-3xl font-bold">
            Proyectos destacados
        </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-gray-800 bg-gray-950 p-6 transition hover:border-purple-500">
            <h3 className="text-xl font-bold">
            GraffIdeas
            </h3>

            <p className="mt-3 text-gray-400">
            Proyecto web orientado a la creación de ideas de
            graffiti y al aprendizaje paso a paso.
            </p>

            <div className="mt-5 flex gap-2">
            <span className="rounded-full bg-gray-900 px-3 py-1 text-sm">
                Next.js
            </span>

            <span className="rounded-full bg-gray-900 px-3 py-1 text-sm">
                TypeScript
            </span>

            <span className="rounded-full bg-gray-900 px-3 py-1 text-sm">
                Tailwind CSS
            </span>
            </div>
        </article>

        <article className="rounded-2xl border border-gray-800 bg-gray-950 p-6 transition hover:border-purple-500">
            <h3 className="text-xl font-bold">
            CliniWin
            </h3>

            <p className="mt-3 text-gray-400">
            Aplicación de gestión para clínicas dentales en la
            que participé como programador junior en C#.
            </p>

            <div className="mt-5 flex gap-2">
            <span className="rounded-full bg-gray-900 px-3 py-1 text-sm">
                C#
            </span>

            <span className="rounded-full bg-gray-900 px-3 py-1 text-sm">
                Programación
            </span>
            </div>
        </article>
        </div>
    </section>
    );
    }