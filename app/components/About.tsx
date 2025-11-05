"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative flex flex-col items-center justify-center min-h-screen px-6 py-10 md:px-20 text-center md:text-left -mt-16"
    >
      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.45, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-12"
      >
        <h2 className="text-4xl font-extrabold md:text-5xl animate-color-dev">
          Sobre mim
        </h2>

        {/* Linha decorativa */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.35, duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-4 h-1 w-40 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 origin-left"
        />
      </motion.div>

      {/* Conteúdo */}
      <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-16">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.45, duration: 0.6, ease: [0.25, 0.8, 0.5, 1] }}
          viewport={{ once: true }}
          className="flex-shrink-0"
        >
          <Image
            src="/leandro.png"
            alt="Leandro Esmerdel"
            width={220}
            height={220}
            className="rounded-full border-4"
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6, ease: [0.25, 0.8, 0.5, 1] }}
          viewport={{ once: true }}
          className="max-w-2xl space-y-6 text-white"
        >
          <p className="text-lg leading-relaxed">
            Sou graduado em <span className="font-semibold">Administração</span> e em{" "}
            <span className="font-semibold">Análise e Desenvolvimento de Sistemas</span>. 
            Essa combinação me permite unir a visão estratégica do negócio com a análise técnica dos dados — 
            transformando números em informações que geram valor e direcionam decisões.
          </p>

          <p className="text-lg leading-relaxed">
            Atualmente, dedico-me a projetos e estudos na área de{" "}
            <span className="font-semibold">Análise de Dados</span>, explorando ferramentas como{" "}
            <span className="font-semibold">Python, SQL, Power BI, Pandas, Databricks</span> e conceitos de{" "}
            <span className="font-semibold">ETL e Data Visualization</span>. 
            Também aplico minha base técnica em desenvolvimento de software, o que me ajuda a compreender o ciclo completo — 
            da coleta e tratamento de dados até a apresentação visual e tomada de decisão.
          </p>

          <p className="text-lg leading-relaxed">
            Sou movido pela curiosidade e pelo desejo de compreender padrões ocultos nas informações. 
            Acredito que cada dado conta uma história — e meu papel é traduzi-la de forma clara, visual e estratégica, 
            transformando complexidade em conhecimento acessível.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
