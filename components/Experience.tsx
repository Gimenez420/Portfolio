export default function Experience() {
    return (
    <section className="mx-auto max-w-6xl px-8 py-20">
        <div className="mb-10">
        <p className="text-sm font-semibold tracking-widest text-purple-400">
            EXPERIENCIA
        </p>

        <h2 className="mt-2 text-3xl font-bold">
            Experiencia profesional
        </h2>
        </div>

        <div className="space-y-8">
        <article className="border-l-2 border-purple-500 pl-6">
            <p className="text-sm text-gray-500">
            03/2024 — 06/2024
            </p>

            <h3 className="mt-2 text-xl font-bold">
            Programador Junior en C#
            </h3>

            <p className="mt-1 text-purple-400">
            Quentin Informática · Alboraia
            </p>

            <p className="mt-4 leading-relaxed text-gray-400">
            Participación en el desarrollo de CliniWin, una aplicación
            de gestión para clínicas dentales. Tras un periodo inicial
            de adaptación al proyecto y al entorno de desarrollo,
            colaboré en una nueva actualización mediante pequeñas
            funcionalidades y tareas de programación en C#.
            </p>
        </article>

        <article className="border-l-2 border-gray-700 pl-6">
            <p className="text-sm text-gray-500">
            03/2022 — 06/2022
            </p>

            <h3 className="mt-2 text-xl font-bold">
            Administrador web en WordPress
            </h3>

            <p className="mt-1 text-purple-400">
            GATEX S.A (Style West) · Nuevo Centro
            </p>

            <p className="mt-4 leading-relaxed text-gray-400">
            Gestión y actualización del catálogo de productos,
            administración de contenidos y mantenimiento de la
            información de la tienda online. También realicé
            pequeñas modificaciones en el frontend de la página web
            dentro del entorno WordPress.
            </p>
        </article>
        </div>
    </section>
    );
}