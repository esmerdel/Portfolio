"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Rocket } from "lucide-react";

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.section
      ref={ref}
      id="home"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      className="relative flex flex-col items-center justify-center h-screen text-center px-6"
    >
      {/* Badge inicial */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
        className="relative mb-6"
      >
        <div className="relative flex items-center gap-2 px-5 py-2 rounded-full bg-black border-2 animate-color-dev shadow-[0_0_12px_currentColor]">
          <span className="text-yellow-400 text-sm animate-star-rotate-smooth">⭐</span>
          <span className="text-sm font-medium text-white">Bem vindo ao meu Universo</span>
        </div>
      </motion.div>

      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.45, delay: 0.45, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-extrabold leading-tight"
      >
        <span className="block animate-color-dev">Desenvolvedor FullStack</span>
        <span className="text-white">& Código</span>{" "}
        <span className="animate-color-creative">Criativo</span>
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ delay: 0.6, duration: 0.4, ease: [0.25, 0.8, 0.5, 1] }}
        className="mt-6 max-w-2xl text-lg text-gray-300 leading-relaxed"
      >
        Transformo ideias em{" "}
        <span className="animate-color-dev">interfaces criativas</span> e{" "}
        <span className="text-pink-400">experiências digitais envolventes</span>, unindo design
        moderno e desenvolvimento eficiente para entregar soluções que encantam e funcionam.
      </motion.p>

      {/* Linha decorativa */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={inView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
        transition={{ delay: 0.75, duration: 0.35, ease: "easeOut" }}
        className="mx-auto mt-6 h-1 w-40 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 origin-left"
      />

      {/* Botões */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ delay: 0.9, duration: 0.4, ease: "easeOut" }}
        className="flex gap-4 mt-10 flex-wrap justify-center"
      >
        <a
          href="#projects"
          className="relative flex items-center gap-2 px-6 py-3 font-medium text-white rounded-full border-2 border-gray-700 overflow-hidden transition-transform duration-300 hover:scale-105"
        >
          <span className="absolute inset-0 rounded-full animate-color-bg-dev opacity-80"></span>
          <Rocket size={18} className="relative z-10 text-white animate-star-rotate-smooth" />
          <span className="relative z-10">Explore Meu Universo</span>
        </a>

        <a
          href="/CVLEANDROESMERDEL.pdf"
          download="CVLEANDROESMERDEL.pdf"
          className="px-6 py-3 font-medium text-gray-300 border-2 border-gray-700 rounded-full hover:bg-white/10 transition"
        >
          Download CV
        </a>
      </motion.div>

      {/* Sociais */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 1.0, duration: 0.4, ease: "easeOut" }}
        className="flex gap-6 mt-10 text-2xl text-gray-400"
      >
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
          href="mailto:leandro_esmerdel@hotmail.com"
          className="hover:text-red-400 transition"
        >
          <FaEnvelope />
        </a>
      </motion.div>

      {/* Scroll indicador */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="absolute bottom-7 text-sm text-gray-500 animate-bounce"
      >
        ↓ Scroll para explorar
      </motion.p>
    </motion.section>
  );
}
