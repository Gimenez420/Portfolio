export default function CV() {
    return (
    <section
        id="cv"
        className="mx-auto max-w-6xl px-8 py-24"
    >
        <div className="rounded-2xl border border-gray-800 bg-gray-950 p-8">
        <p className="text-sm font-semibold tracking-widest text-purple-400">
            CURRÍCULUM
        </p>

        <h2 className="mt-2 text-3xl font-bold">
            Mi CV
        </h2>

        <p className="mt-4 max-w-2xl text-gray-400">
            Consulta mi experiencia profesional, formación y
            conocimientos  técnicos.
        </p>

        <a
            href="/public/CV_Ricardo_Gimenez_Valero.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-purple-600 px-6 py-3 font-semibold transition hover:bg-purple-500"
        >
            Ver CV
        </a>
        </div>
    </section>
    );
}
