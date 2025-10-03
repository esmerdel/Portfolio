"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-6"
    >
      {/* Badge inicial */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="px-5 py-2 mb-6 text-sm font-medium text-white border border-gray-700 rounded-full bg-gradient-to-r from-purple-600/30 via-fuchsia-600/30 to-indigo-600/30 backdrop-blur-md shadow-md"
      >
        🚀 Bem-vindo ao meu universo digital
      </motion.div>

 <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="text-5xl md:text-7xl font-extrabold leading-tight"
>
  <span className="block animate-color-dev">Desenvolvedor FullStack</span>
  <span className="text-white">& Código</span>{" "}
  <span className="animate-color-creative"> Criativo</span>
</motion.h1>



      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="mt-6 max-w-2xl text-lg text-gray-300 leading-relaxed"
      >
        Transformo ideias em{" "}
        <span className="animate-color-dev">interfaces criativas</span> e{" "}
        <span className="text-pink-400">experiências digitais envolventes</span>,
        unindo design moderno e desenvolvimento eficiente para entregar soluções
        que encantam e funcionam.
      </motion.p>

      {/* Linha decorativa */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={inView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        className="mx-auto mt-6 h-1 w-40 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 origin-left"
      />

      {/* Botões */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className="flex gap-4 mt-10 flex-wrap justify-center"
      >
        <a
          href="#projects"
          className="flex items-center gap-2 px-6 py-3 text-white rounded-full shadow-lg transition bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 hover:opacity-90"
        >
          <Rocket size={18} /> Explore meu universo
        </a>
        <a
          href="/cv.pdf"
          download
          className="px-6 py-3 font-medium text-gray-300 border border-gray-700 rounded-full hover:bg-white/10 transition"
        >
          Download CV
        </a>
      </motion.div>

      {/* Sociais */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
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
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-12 text-sm text-gray-500 animate-bounce"
      >
        ↓ Scroll para explorar
      </motion.p>
    </section>
  );
}
