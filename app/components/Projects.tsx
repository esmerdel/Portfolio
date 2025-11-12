import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

export default function Projects() {
  const projects = [
    {
      title: "Na Régua - Sistema para Barbearias",
      description:
        "Sistema completo para agendamentos, vendas e controle de serviços em barbearias.",
      tech: ["Laravel", "MySQL", "Tailwind", "FullCalendar"],
      image: "/barbearia.png",
      github: "https://github.com/esmerdel/naregua",
    },
    {
      title: "Tech News Scraper",
      description:
        "Aplicação backend desenvolvida em Node.js que coleta notícias de tecnologia, armazena em banco de dados e envia automaticamente para um grupo no Telegram.",
      tech: ["Node.js", "Puppeteer", "MySQL", "Telegram API"],
      image: "/scraper.png",
      github: "https://github.com/esmerdel/scraper-noticias",

    },
    {
      title: "Classe de Aula",
      description:
        "Sistema web educacional com API RESTful em Django, autenticação JWT e painel do aluno integrado ao frontend em HTML, CSS e JavaScript.",
      tech: ["Python", "Django", "API RESTful", "JWT", "HTML", "CSS", "JavaScript"],
      image: "/classeaula.png",
      github: "https://github.com/esmerdel/Classe_Aula",

    },
    {
      title: "ERP - Sistema de Gestão",
      description:
        "ERP completo com backend em .NET Core e SQL Server, integração via API RESTful e frontend em Angular para gerenciamento de cadastros, estoque e processos internos.",
      tech: ["C#", ".NET Core", "API RESTful", "SQL Server", "Entity Framework", "Angular", "TypeScript"],
      image: "/erp.png",
      github: "https://github.com/esmerdel/ERP",
    },


  ]

  return (
    <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-400">
        Projetos em destaque
      </h2>
      <p className="text-center text-gray-400 mb-12">
        Alguns dos trabalhos que desenvolvi e colaborei
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-xl shadow-md hover:shadow-purple-500/20 overflow-hidden transition group"
          >
            {/* Imagem */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
            />

            {/* Conteúdo */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              {/* Tecnologias */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded-full bg-gray-800 border border-gray-700 text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-gray-300 hover:text-purple-400"
                  >
                    <FaGithub /> Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
