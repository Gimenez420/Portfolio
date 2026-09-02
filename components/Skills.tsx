export default function Skills() {
    const categories = [
    {
        title: "Lenguajes",
        skills: ["C#", "Python", "JavaScript", "TypeScript"],
    },
    {
        title: "Web",
        skills: ["HTML", "CSS", "Next.js", "Tailwind CSS", "WordPress"],
    },
    {
        title: "Herramientas",
        skills: ["SQL", "Git"],
    },
    ];

    return (
    <section className="mx-auto w-full max-w-6xl px-8 py-24">
        <div className="mb-12">
        <p className="text-sm font-semibold tracking-[0.25em] text-purple-400">
            TECNOLOGÍAS
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight">
            Herramientas con las que trabajo
        </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {categories.map((category) => (
            <article
            key={category.title}
            className="rounded-2xl border border-gray-800 bg-gray-950 p-6"
            >
            <h3 className="text-lg font-bold">
                {category.title}
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                <span
                    key={skill}
                    className="rounded-lg border border-gray-800 px-3 py-2 text-sm text-gray-300 transition hover:border-purple-500 hover:text-white"
                >
                    {skill}
                </span>
                ))}
            </div>
            </article>
        ))}
        </div>
    </section>
    );
}