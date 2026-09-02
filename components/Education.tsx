export default function Education() {
    const education = [
    {
        date: "2025 — 2026",
        title: "Desarrollo de Aplicaciones en Python",
    },
    {
        date: "2022 — 2024",
        title: "Desarrollo de Aplicaciones Web",
    },
    {
        date: "2020 — 2022",
        title: "Auxiliar de Sistemas Microinformáticos y Redes",
    },
    ];

    return (
    <section className="mx-auto w-full max-w-6xl px-8 py-10">
        <div className="mb-12">
        <p className="text-sm font-semibold tracking-[0.25em] text-purple-400">
            FORMACIÓN
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight">
            Estudios
        </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {education.map((item) => (
            <article
            key={item.title}
            className="rounded-2xl border border-gray-800 bg-gray-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-500"
            >
            <p className="text-sm text-gray-500">
                {item.date}
            </p>

            <h3 className="mt-4 text-xl font-bold">
                {item.title}
            </h3>

            <p className="mt-3 text-purple-400">
                I.E.S. Conselleria · Campanar
            </p>
            </article>
        ))}
        </div>
    </section>
    );
}