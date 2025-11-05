"use client";

import { motion } from "framer-motion";
import {
  FaPython,
  FaDatabase,
  FaChartBar,
  FaCogs,
  FaCloud
} from "react-icons/fa";
import {
  SiDatabricks,
  SiPandas,
  SiNumpy,
  SiApacheairflow
} from "react-icons/si";
import { PiMicrosoftPowerpointLogoFill } from "react-icons/pi";

export default function Projects() {
  const projects = [
    {
      title: "Dashboard de Vendas e Indicadores",
      description:
        "Desenvolvimento de um dashboard interativo no Power BI para análise de vendas e desempenho comercial. Inclui métricas como faturamento mensal, ticket médio, top produtos e variação de receita. Os dados foram extraídos e tratados com SQL e Excel antes da visualização.",
      icon: (
        <PiMicrosoftPowerpointLogoFill className="text-yellow-400 text-4xl" />
      ),
      techs: ["Power BI", "SQL", "Excel"],
      status: "Concluído"
    },
    {
      title: "Pipeline de Dados Automatizado com Python",
      description:
        "Criação de um processo ETL completo para coletar dados de uma API pública, realizar limpeza e transformação com Pandas e armazenar os resultados em um banco de dados MySQL. O fluxo é automatizado com Apache Airflow, garantindo agendamento e repetibilidade.",
      icon: <FaPython className="text-yellow-400 text-4xl" />,
      techs: ["Python", "Pandas", "Airflow", "MySQL", "Docker"],
      status: "Em desenvolvimento"
    },
    {
      title: "Análise Exploratória de Dados Públicos",
      description:
        "Projeto de exploração e visualização de dados do IBGE, com tratamento de inconsistências, geração de gráficos e identificação de padrões regionais de crescimento econômico. Foco em storytelling de dados e comunicação de insights.",
      icon: <FaChartBar className="text-sky-400 text-4xl" />,
      techs: ["Python", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
      status: "Concluído"
    },
    {
      title: "Processamento de Dados em Larga Escala com Databricks",
      description:
        "Simulação de um ambiente de Big Data para consolidar dados não estruturados em um Data Lake, utilizando PySpark dentro da plataforma Databricks. Aplicação de transformações e cálculos distribuídos com foco em performance.",
      icon: <SiDatabricks className="text-red-400 text-4xl" />,
      techs: ["Databricks", "PySpark", "Data Lake", "SQL"],
      status: "Em estudo"
    },
    {
      title: "Automação de Relatórios e Envio de Insights",
      description:
        "Desenvolvimento de um script em Python que gera relatórios automáticos diários em Excel com indicadores de desempenho e envia por e-mail para os stakeholders. Projeto voltado à eficiência e redução de tarefas manuais repetitivas.",
      icon: <FaCogs className="text-green-400 text-4xl" />,
      techs: ["Python", "Excel", "smtplib", "Automação"],
      status: "Em desenvolvimento"
    }
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 md:px-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="mb-4 text-4xl font-extrabold md:text-5xl animate-color-dev text-center"
      >
        Projetos
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.45, ease: "easeOut" }}
        className="mb-12 text-gray-400 text-lg text-center max-w-2xl"
      >
        Alguns exemplos de como aplico{" "}
        <span className="animate-color-dev">análise, engenharia e visualização de dados</span>{" "}
        para gerar valor e transformar informações em decisões estratégicas.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="p-6 border border-gray-700 bg-black/40 rounded-xl shadow-lg transition-all duration-500 
                       ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]"
          >
            <div className="flex items-center gap-4 mb-4">
              {project.icon}
              <div>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.status}</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.techs.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
