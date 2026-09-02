export default function Experience() {
    const experiences = [
    {
        date: "03/2024 — 06/2024",
        role: "Programador Junior en C#",
        company: "Quentin Informática",
        location: "Alboraia",
        description:
        "Participación en el desarrollo de CliniWin, una aplicación de gestión para clínicas dentales. Tras un periodo inicial de adaptación al proyecto y al entorno de desarrollo, colaboré en una nueva actualización mediante pequeñas funcionalidades y tareas de programación en C#.",
    },
    {
        date: "03/2022 — 06/2022",
        role: "Administrador web en WordPress",
        company: "GATEX S.A (Style West)",
        location: "Nuevo Centro",
        description:
        "Gestión y actualización del catálogo de productos, administración de contenidos y mantenimiento de la información de la tienda online. También realicé pequeñas modificaciones en el frontend de la página web dentro del entorno WordPress.",
    },
    ];

    return (
    <section className="mx-auto w-full max-w-6xl px-8 py-10">
        <div className="mb-12">
        <p className="text-sm font-semibold tracking-[0.25em] text-purple-400">
            EXPERIENCIA
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight">
            Experiencia profesional
        </h2>
        </div>

        <div className="space-y-6">
        {experiences.map((experience) => (
            <article
            key={experience.role}
            className="group rounded-2xl border border-gray-800 bg-gray-950 p-7 transition duration-300 hover:border-purple-500"
            >
            <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                <h3 className="text-2xl font-bold">
                    {experience.role}
                </h3>

                <p className="mt-1 text-purple-400">
                    {experience.company} · {experience.location}
                </p>
                </div>

                <p className="text-sm text-gray-500">
                {experience.date}
                </p>
            </div>

            <p className="mt-5 max-w-4xl leading-relaxed text-gray-400">
                {experience.description}
            </p>
            </article>
        ))}
        </div>
    </section>
    );
}