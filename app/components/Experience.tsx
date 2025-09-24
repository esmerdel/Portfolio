"use client"

import { motion } from "framer-motion"

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 md:px-20"
    >

      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-4 text-4xl font-extrabold md:text-5xl animate-gradient text-center"
      >
        Experiência
      </motion.h2>

      <p className="mb-12 text-gray-400 text-lg text-center">
        Minha jornada profissional em{" "}
        <span className="text-green-400">Tecnologia da Informação</span>
      </p>

      {/* Timeline */}
      <div className="relative w-full max-w-4xl space-y-12">
        {/* Item 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative p-6 bg-black/40 rounded-xl border border-gray-700 shadow-lg"
        >
          <span className="absolute -left-3 top-6 w-3 h-3 rounded-full bg-green-400"></span>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-green-400">
                Desenvolvedor FullStack
              </h3>
              <p className="text-gray-400">FreeLancer</p>
            </div>
            <span className="text-sm text-gray-400">2024 - Presente</span>
          </div>
          <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
            <li>Desenvolvimento de sistemas com React, Next.js e Laravel</li>
            <li>Integração de APIs e banco de dados</li>
            <li>Deploy em ambientes cloud</li>
          </ul>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {["React", "Next.js", "Laravel", "Tailwind", "API"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300 border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Item 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative p-6 bg-black/40 rounded-xl border border-gray-700 shadow-lg"
        >
          <span className="absolute -left-3 top-6 w-3 h-3 rounded-full bg-pink-400"></span>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-pink-400">
                Helpdesk
              </h3>
              <p className="text-gray-400">Receita Federal</p>
            </div>
            <span className="text-sm text-gray-400">2022 - 2024</span>
          </div>
          <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
            <li> Suporte a usuários presencial e remoto em hardware, software, redes e sistemas.</li>
            <li> Registro, priorização e acompanhamento de chamados via sistema de helpdesk.</li>
            <li> Instalação, configuração e manutenção de equipamentos e softwares.</li>
            <li>  Gestão de ativos de TI e apoio no inventário de equipamentos.</li>
            <li>Automatização de rotinas internas</li>
          </ul>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {["Windows", "Redes", "Suporte", "Automação"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300 border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
