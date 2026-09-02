export default function Skills() {
    const skills = [
    "C#",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "WordPress",
    "SQL",
    "Git",
    ];

    return (
    <section className="mx-auto max-w-6xl px-8 py-20">
        <div className="mb-10">
        <p className="text-sm font-semibold tracking-widest text-purple-400">
            TECNOLOGÍAS
        </p>

        <h2 className="mt-2 text-3xl font-bold">
            Herramientas con las que trabajo
        </h2>
        </div>

        <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
            <span
            key={skill}
            className="rounded-lg border border-gray-800 bg-gray-950 px-4 py-2 text-sm text-gray-300"
            >
            {skill}
            </span>
        ))}
        </div>
    </section>
    );
}