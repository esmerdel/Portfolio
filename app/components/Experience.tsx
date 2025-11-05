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
        Um caminho que une{" "}
        <span className="animate-color-dev">Administração, Tecnologia e Dados</span>
      </motion.p>

      {/* Timeline */}
      <div className="relative w-full max-w-4xl space-y-12">

        {/* Item 1 — Analista de Dados Autônomo */}
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
                Analista de Dados (Autônomo)
              </h3>
              <p className="text-gray-400">Projetos Pessoais e Estudos Aplicados</p>
            </div>
            <span className="text-sm text-gray-400">2025 - Presente</span>
          </div>

          <ul className="mt-4 space-y-2 text-gray-300 list-disc list-inside">
            <li>
              Desenvolvimento de projetos próprios voltados à{" "}
              <span className="text-white font-semibold">Análise de Dados</span>, 
              aplicando conceitos de ETL, visualização e modelagem.
            </li>
            <li>
              Manipulação e tratamento de grandes volumes de dados utilizando{" "}
              <span className="text-white font-semibold">Python (Pandas, NumPy)</span> e{" "}
              <span className="text-white font-semibold">SQL</span>.
            </li>
            <li>
              Criação de dashboards interativos e relatórios estratégicos em{" "}
              <span className="text-white font-semibold">Power BI</span> e{" "}
              <span className="text-white font-semibold">Excel Avançado</span>.
            </li>
            <li>
              Estudos contínuos sobre{" "}
              <span className="text-white font-semibold">Databricks, PySpark e Data Lake</span> 
              com foco em engenharia e performance de dados.
            </li>
            <li>
              Aplicação de boas práticas de versionamento e automação de processos com{" "}
              <span className="text-white font-semibold">Git</span> e{" "}
              <span className="text-white font-semibold">Python</span>.
            </li>
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              "Python",
              "SQL",
              "Power BI",
              "Pandas",
              "Databricks",
              "PySpark",
              "Git",
              "ETL",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300 border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Item 2 — Experiências anteriores */}
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
                Experiências Anteriores
              </h3>
              <p className="text-gray-400">Administração e Tecnologia da Informação</p>
            </div>
            <span className="text-sm text-gray-400">Até 2024</span>
          </div>

          <p className="mt-4 text-gray-300 leading-relaxed">
            Atuei nas áreas de <span className="font-semibold text-white">Administração</span> e{" "}
            <span className="font-semibold text-white">Suporte de TI</span>, experiências que fortaleceram 
            minha visão analítica, organização e capacidade de resolver problemas técnicos. 
            Essa base sólida me conduz hoje ao universo dos dados — unindo 
            <span className="text-white font-semibold"> raciocínio lógico, curiosidade e tecnologia </span>
            para transformar informação em valor real.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {["Administração", "TI", "Excel", "Análise de Processos", "Organização"].map((tech) => (
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
