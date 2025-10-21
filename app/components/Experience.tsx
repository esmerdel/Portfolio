"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 md:px-20"
    >
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-4 text-4xl font-extrabold md:text-5xl animate-color-dev text-center"
      >
        Experiência
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.45, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-12 text-gray-400 text-lg text-center"
      >
        Minha trajetória em{" "}
        <span className="animate-color-dev">Tecnologia da Informação</span>
      </motion.p>

      {/* Timeline */}
      <div className="relative w-full max-w-4xl space-y-12">

        {/* Item 1 — Desenvolvedor FullStack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.04, zIndex: 10 }}
          className="relative p-6 rounded-xl border border-gray-700 bg-black/40 shadow-lg 
                     transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] 
                     hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] 
                     hover:bg-gradient-to-r hover:from-[rgba(56,189,248,0.08)] 
                     hover:via-[rgba(168,85,247,0.08)] hover:to-[rgba(236,72,153,0.08)]"
        >
          <span className="absolute -left-4 top-8 w-3 h-3 rounded-full animate-color-bg-dev"></span>

          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold animate-color-dev">
                Desenvolvedor FullStack
              </h3>
              <p className="text-gray-400">Freelancer / Projetos Pessoais</p>
            </div>
            <span className="text-sm text-gray-400">2025 - Presente</span>
          </div>

          <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
            <li>Desenvolvimento de aplicações web completas com foco em desempenho e usabilidade.</li>
            <li>Criação de APIs RESTful em Laravel e integração com front-end em React.</li>
            <li>Automação de tarefas e coleta de dados com Python e Puppeteer.</li>
            <li>Modelagem de banco de dados MySQL com consultas otimizadas.</li>
            <li>Deploy e versionamento com Git e GitHub, aplicando boas práticas de CI/CD.</li>
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {["Laravel", "React", "PHP", "C#", "Python", "MySQL", "Git"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300 border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Suporte de TI */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.04, zIndex: 10 }}
          className="relative p-6 rounded-xl border border-gray-700 bg-black/40 shadow-lg 
                     transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] 
                     hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] 
                     hover:bg-gradient-to-r hover:from-[rgba(56,189,248,0.08)] 
                     hover:via-[rgba(168,85,247,0.08)] hover:to-[rgba(236,72,153,0.08)]"
        >
          <span className="absolute -left-4 top-8 w-3 h-3 rounded-full bg-pink-400"></span>

          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-pink-400">
                Suporte de TI / Helpdesk
              </h3>
              <p className="text-gray-400">Receita Federal do Brasil</p>
            </div>
            <span className="text-sm text-gray-400">2022 - 2025</span>
          </div>

          <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
            <li>Suporte técnico e manutenção de sistemas, redes e estações de trabalho.</li>
            <li>Gestão de ativos e automação de processos com scripts em Python.</li>
            <li>Coleta e estruturação de dados para relatórios internos e administrativos.</li>
            <li>Atendimento e resolução de incidentes garantindo continuidade operacional.</li>
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {["Suporte", "Python", "Excel", "Automação", "Redes"].map((tech) => (
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
    </motion.section>
  );
}
