export default function Hero() {
    return (
    <section className="mx-auto grid min-h-[80vh] w-full max-w-6xl grid-cols-1 items-center gap-12 px-8 py-20 md:grid-cols-2">
        <div>
        <p className="mb-5 text-sm font-semibold tracking-[0.25em] text-purple-400">
            DESARROLLADOR WEB
        </p>

        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Ricardo
            <br />
            <span className="text-purple-500">
            Giménez Valero
            </span>
        </h1>

        <p className="mt-7 max-w-xl text-lg leading-relaxed text-gray-400">
            Desarrollador web junior interesado en crear aplicaciones
            modernas, funcionales y seguir aprendiendo nuevas
            tecnologías.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
            <a
            href="#proyectos"
            className="rounded-lg bg-purple-600 px-6 py-3 font-semibold transition duration-200 hover:-translate-y-0.5 hover:bg-purple-500"
            >
            Ver proyectos
            </a>

            <a
            href="#cv"
            className="rounded-lg border border-gray-700 px-6 py-3 font-semibold transition duration-200 hover:-translate-y-0.5 hover:border-purple-500"
            >
            Descargar CV
            </a>
        </div>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-gray-950 p-6 shadow-2xl">
        <div className="mb-6 flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <pre className="overflow-x-auto text-sm leading-7 text-gray-300">
            <code>{`const developer = {
    name: "Ricardo Giménez Valero",
    role: "Desarrollador Web Junior",
    location: "Valencia, España",
    alwaysLearning: true
    };`}</code>
        </pre>
        </div>
    </section>
    );
}