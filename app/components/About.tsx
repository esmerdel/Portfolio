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
          className="mt-4 h-1 w-40 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 origin-left"
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
            className="rounded-full border-4 "
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
            <span className="font-semibold">Análise e Desenvolvimento de Sistemas</span>, e combino a visão estratégica da área administrativa com a base técnica da tecnologia, o que me permite compreender problemas e soluções de forma integrada.
          </p>

          <p className="text-lg leading-relaxed">
            Atualmente, desenvolvo projetos pessoais e realizo freelances na área de desenvolvimento de software, atuando como <span className="font-semibold">Full Stack Developer</span> e aplicando conhecimentos em Python, C#, Laravel, React, PHP e MySQL para criar soluções que geram valor e impacto real.
          </p>

          <p className="text-lg leading-relaxed">
            Sempre fui movido pela curiosidade em entender como as coisas funcionam, e foi essa curiosidade que me direcionou para o mundo da tecnologia. Hoje, aplico esse interesse em projetos e estudos contínuos, com o objetivo de aprender, resolver problemas e desenvolver sistemas cada vez mais eficientes e bem estruturados.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
