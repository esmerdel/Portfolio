import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDocker, FaGitAlt } from "react-icons/fa"
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiSharp, SiPostgresql } from "react-icons/si"

export default function Skills() {
  const skills = [
    { name: "Next.js", icon: <SiNextdotjs className="text-white text-4xl" />, color: "from-gray-700 to-gray-900" },
    { name: "React", icon: <FaReact className="text-sky-400 text-4xl" />, color: "from-sky-700 to-sky-900" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-4xl" />, color: "from-blue-700 to-blue-900" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-4xl" />, color: "from-cyan-700 to-cyan-900" },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-4xl" />, color: "from-orange-700 to-orange-900" },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-400 text-4xl" />, color: "from-blue-600 to-blue-900" },
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" />, color: "from-red-700 to-red-900" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" />, color: "from-green-700 to-green-900" },
    { name: "Docker", icon: <FaDocker className="text-sky-500 text-4xl" />, color: "from-sky-700 to-sky-900" },
    { name: "C#", icon: <SiSharp className="text-purple-500 text-4xl" />, color: "from-purple-700 to-purple-900" },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500 text-4xl" />, color: "from-blue-800 to-blue-900" },
  ]

  return (
    <section id="skills" className="py-16 px-6 max-w-6xl mx-auto">
      {/* Título */}
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-400">Skills & Technologies</h2>
      <p className="text-center text-gray-400 mb-12">
        The magical tools I use to bring <span className="text-purple-400">ideas to life</span>
      </p>

      {/* Grid de Skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-purple-500/20 transition"
          >
            {skill.icon}
            <p className="mt-3 text-gray-300 font-medium">{skill.name}</p>

            {/* Barra de progresso fake */}
            <div className="w-full mt-4 h-1.5 bg-gray-700 rounded-full">
              <div
                className={`h-1.5 rounded-full bg-gradient-to-r ${skill.color}`}
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
        <div className="p-6 bg-gray-900 border border-gray-700 rounded-xl text-center">
          <p className="text-purple-400 text-2xl font-bold">12+</p>
          <p className="text-gray-400 text-sm">Technologies</p>
        </div>
        <div className="p-6 bg-gray-900 border border-gray-700 rounded-xl text-center">
          <p className="text-purple-400 text-2xl font-bold">15+</p>
          <p className="text-gray-400 text-sm">Projects</p>
        </div>
        <div className="p-6 bg-gray-900 border border-gray-700 rounded-xl text-center">
          <p className="text-purple-400 text-2xl font-bold">2+</p>
          <p className="text-gray-400 text-sm">Experience</p>
        </div>
        <div className="p-6 bg-gray-900 border border-gray-700 rounded-xl text-center">
          <p className="text-purple-400 text-2xl font-bold">∞</p>
          <p className="text-gray-400 text-sm">Coffee Cups</p>
        </div>
      </div>
    </section>
  )
}
