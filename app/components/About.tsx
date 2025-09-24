import Image from "next/image"

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-transparent flex flex-col items-center justify-center min-h-screen px-6 py-20 md:px-20 text-center md:text-left"
    >
      {/* Título */}
      <h2 className="mb-12 text-4xl font-extrabold md:text-5xl animate-gradient">
        Sobre mim
      </h2>

      {/* Conteúdo */}
      <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-16">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <Image
            src="/leandro.png"
            alt="Leandro Esmerdel"
            width={220}
            height={220}
            className="rounded-full border-4 border-purple-500/50 shadow-lg"
          />
        </div>

        {/* Texto */}
        <div className="max-w-2xl space-y-4 text-gray-300">
          <p className="text-lg leading-relaxed">
            Olá! Eu sou <span className="font-bold text-white">Leandro Esmerdel</span>, 
            um desenvolvedor <span className="text-purple-400">FullStack</span> apaixonado 
            por criar interfaces modernas e experiências digitais envolventes.
          </p>

          <p className="text-lg leading-relaxed">
            Tenho experiência prática com <span className="text-pink-400">React</span>,{" "}
            <span className="text-orange-400">Next.js</span> e ferramentas de UI como{" "}
            <span className="text-purple-400">Tailwind</span> e{" "}
            <span className="text-pink-400">shadcn/ui</span>. Meu foco é unir design 
            criativo e código limpo para entregar soluções que funcionam e encantam.
          </p>

          <p className="text-lg leading-relaxed">
            Fora do código, estou sempre explorando novas tecnologias e buscando
            evoluir como profissional. 
          </p>
        </div>
      </div>
    </section>
  )
}
