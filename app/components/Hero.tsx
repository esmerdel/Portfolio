import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { Rocket } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6">
      {/* Badge com gradiente animado */}
      <div className="px-4 py-1 mb-6 text-sm font-medium text-white border rounded-full animate-gradient-bg border-transparent">
        ✨ BEM VINDO AO MEU UNIVERSO
      </div>

      {/* Titulos */}
      <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
        <span className="block text-white">Leandro Esmerdel</span>
        <span className="block animate-gradient">Desenvolvedor FullStack</span>
      </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400 leading-relaxed">
        Transformo ideias em <span className="text-purple-400">interfaces criativas</span>{" "}
        e <span className="text-pink-400">experiências digitais envolventes</span>, 
        unindo design moderno e desenvolvimento eficiente para entregar soluções que 
        encantam e funcionam.
        </p>


      {/* Botoes */}
      <div className="flex gap-4 mt-8">
        <a
          href="#projects"
          className="flex items-center gap-2 px-6 py-3 text-white rounded-full shadow-lg transition animate-gradient-bg"
        >
          <Rocket size={18} /> Explore Meu Universo
        </a>
        <a
          href="/cv.pdf"
          download
          className="px-6 py-3 font-medium text-gray-300 border border-gray-700 rounded-full hover:bg-white/10 transition"
        >
          Download CV
        </a>
      </div>

      {/* Sociais */}
      <div className="flex gap-6 mt-10 text-2xl text-gray-400">
        <a
          href="https://github.com/esmerdel"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/leandro-esmerdel/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="leandro_esmerdel@hotmail.com"
          className="hover:text-red-400 transition"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Scroll indicador */}
      <p className="mt-12 text-sm text-gray-500 animate-bounce">
        ↓ Scroll para Explorar
      </p>
    </section>
  )
}
