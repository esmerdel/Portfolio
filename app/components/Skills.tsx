"use client";

import { motion } from "framer-motion";
import {
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaMicrosoft,
  FaTable,
} from "react-icons/fa";
import {
  SiPandas,
  SiNumpy,
  SiMysql,
  SiPostgresql,
  SiPowers,
  SiDatabricks,
  SiApacheairflow,
  SiJupyter,
  SiGooglecloud,
  SiSparkar,
} from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
export default function Skills() {
  const skills = [
    { name: "Python", icon: <FaPython className="text-yellow-400 text-4xl" />, color: "#facc15" },
    { name: "SQL", icon: <FaDatabase className="text-blue-400 text-4xl" />, color: "#60a5fa" },
    { name: "Power BI", icon: <SiPowers className="text-yellow-500 text-4xl" />, color: "#fbbf24" },
    { name: "Pandas", icon: <SiPandas className="text-purple-400 text-4xl" />, color: "#a855f7" },
    { name: "NumPy", icon: <SiNumpy className="text-sky-400 text-4xl" />, color: "#38bdf8" },
    { name: "Databricks", icon: <SiDatabricks className="text-red-500 text-4xl" />, color: "#ef4444" },
    { name: "PySpark", icon: <SiSparkar className="text-orange-400 text-4xl" />, color: "#fb923c" },
    { name: "Airflow", icon: <SiApacheairflow className="text-cyan-400 text-4xl" />, color: "#22d3ee" },
    { name: "MySQL", icon: <SiMysql className="text-blue-500 text-4xl" />, color: "#3b82f6" },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-indigo-400 text-4xl" />, color: "#818cf8" },
    { name: "Jupyter", icon: <SiJupyter className="text-orange-400 text-4xl" />, color: "#fb923c" },
    { name: "Docker", icon: <FaDocker className="text-sky-400 text-4xl" />, color: "#38bdf8" },
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" />, color: "#ef4444" },
    { name: "Azure DevOps", icon: <VscAzureDevops className="text-blue-500 text-4xl" />, color: "#3b82f6" },
    { name: "AWS", icon: <FaAws className="text-yellow-500 text-4xl" />, color: "#facc15" },
    { name: "Google Cloud", icon: <SiGooglecloud className="text-sky-400 text-4xl" />, color: "#38bdf8" },
    { name: "Excel Avançado", icon: <FaTable className="text-green-400 text-4xl" />, color: "#22c55e" },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 px-6 max-w-6xl mx-auto flex flex-col items-center justify-center overflow-hidden"
    >
      {/* === BLOBS FLUTUANTES === */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-blue-600/30 rounded-full blur-[180px] top-[20%] left-[25%]"
        animate={{ opacity: [0, 0.4, 0], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] bg-cyan-500/30 rounded-full blur-[160px] top-[60%] right-[20%]"
        animate={{ opacity: [0, 0.35, 0], scale: [0.9, 1.3, 0.9] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* === TÍTULO === */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-4xl font-extrabold mb-2 text-center animate-color-dev z-10"
      >
        Habilidades & Tecnologias
      </motion.h2>

      {/* === BARRINHA === */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-40 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 rounded-full mb-8 origin-left"
      />

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
        className="text-center text-gray-400 mb-12 max-w-xl z-10"
      >
        As ferramentas que utilizo para{" "}
        <span className="animate-color-dev">coletar, transformar e visualizar dados</span>.
      </motion.p>

      {/* === GRID DE SKILLS === */}
      <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full z-10">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08, duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="relative group bg-black/40 border border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center shadow-md 
                       transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden"
          >
            <div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-700 blur-[30px]"
              style={{ background: skill.color }}
            ></div>

            <motion.div
              className="absolute inset-0 rounded-xl blur-[50px] opacity-20"
              style={{ background: skill.color }}
              animate={{ opacity: [0.1, 0.25, 0.1], scale: [1, 1.1, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>

            <motion.div
              className="relative z-10 flex flex-col items-center justify-center"
              animate={{
                filter: [
                  "drop-shadow(0_0_0px_white)",
                  "drop-shadow(0_0_6px_white)",
                  "drop-shadow(0_0_0px_white)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {skill.icon}
              <p className="mt-3 text-gray-300 font-medium">{skill.name}</p>
            </motion.div>

            <div className="relative w-full mt-4 h-1.5 bg-gray-800 rounded-full overflow-hidden z-10">
              <motion.div
                className="absolute left-0 top-0 h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${skill.color}, transparent)`,
                }}
                initial={{ width: "0%" }}
                whileInView={{ width: "85%" }}
                transition={{ delay: idx * 0.1, duration: 1.2, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* === ESTATÍSTICAS === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 w-full z-10"
      >
        {[
          { value: "15+", label: "Tecnologias de Dados" },
          { value: "5+", label: "Projetos em Desenvolvimento" },
          { value: "1+", label: "Anos de Experiência Técnica" },
          { value: "∞", label: "Consultas SQL Executadas" },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-black/40 border border-gray-700 rounded-xl text-center shadow-md 
                       hover:shadow-[0_0_25px_rgba(255,255,255,0.08)] transition-all duration-300"
          >
            <p className="animate-color-dev text-2xl font-bold">{stat.value}</p>
            <p className="text-gray-400 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
