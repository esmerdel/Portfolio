import { projects } from "./data/projects"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-400">Featured Projects</h2>
      <p className="text-center text-gray-400 mb-12">Some of the work I've built and collaborated on</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-xl shadow-md hover:shadow-purple-500/20 overflow-hidden transition group"
          >
            {/* Imagem */}
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover group-hover:opacity-90" />

            {/* Conteúdo */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>

              {/* Tecnologias */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-2 py-1 text-xs rounded-full bg-gray-800 border border-gray-700 text-gray-300">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-gray-300 hover:text-purple-400">
                    <FaGithub /> Code
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-gray-300 hover:text-purple-400">
                    <FaExternalLinkAlt /> Demo
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
