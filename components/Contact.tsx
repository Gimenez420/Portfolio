export default function Contact() {
    return (
    <section
        id="contacto"
        className="mx-auto max-w-6xl px-8 py-20"
    >
        <div className="rounded-2xl border border-gray-800 bg-gray-950 p-8">
        <p className="text-sm font-semibold tracking-widest text-purple-400">
            CONTACTO
        </p>

        <h2 className="mt-2 text-3xl font-bold">
            ¿Hablamos?
        </h2>

        <p className="mt-4 max-w-2xl text-gray-400">
            Si estás buscando un desarrollador junior con ganas de
            aprender y seguir creciendo profesionalmente, puedes
            contactar conmigo o consultar mis perfiles.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
            <a
            href="mailto:grimenezvalero01@gmail.com"
            className="rounded-lg bg-purple-600 px-6 py-3 font-semibold transition hover:bg-purple-500"
            >
            Email
            </a>

            <a
            href="https://github.com/gimenez420"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-700 px-6 py-3 font-semibold transition hover:border-purple-500"
            >
            GitHub
            </a>

            <a
            href="https://www.linkedin.com/in/ricardo-gimenez-valero-553217342/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-700 px-6 py-3 font-semibold transition hover:border-purple-500"
            >
            LinkedIn
            </a>
        </div>
        </div>
    </section>
    );
}