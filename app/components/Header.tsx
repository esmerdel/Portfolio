"use client";
import { motion } from "framer-motion"
import { Home, User, Briefcase, Code, FolderGit2, Mail } from "lucide-react"



export default function Header() {
  return (
    <motion.header
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="fixed top-0 left-0 w-full flex items-center justify-between px-60 py-4 backdrop-blur-md bg-black/20 z-50 border-b border-white/10"
>

      
      {/* Logo + Nome */}
      <div className="flex items-center gap-3 ml-2">
  {/* Círculo com animação */}
  <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg animate-bg-color-dev">
    <svg
      stroke="currentColor"
      fill="white"  
      strokeWidth="0"
      viewBox="0 0 640 512"
      className="text-lg animate-spin-slow"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6-4.9-4.3-12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path>
    </svg>
  </div>

  {/* Nome e subtítulo */}
  <div className="flex flex-col leading-tight">
    <span className="text-base font-bold animate-color-dev">Leandro Esmerdel</span>
    <span className="text-xs text-gray-400">Analista de Dados</span>
  </div>
</div>

  <nav className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-full bg-black/50">
    <a href="#home" className="flex items-center px-3 py-1.5 space-x-1.5 text-sm font-medium text-white transition-all duration-300 rounded-full hover:bg-white/10">
      <Home size={16} /> <span>Início</span>
    </a>
    <a href="#about" className="flex items-center px-3 py-1.5 space-x-1.5 text-sm font-medium text-white transition-all duration-300 rounded-full hover:bg-white/10">
      <User size={16} /> <span>Sobre</span>
    </a>
    <a href="#experience" className="flex items-center px-3 py-1.5 space-x-1.5 text-sm font-medium text-white transition-all duration-300 rounded-full hover:bg-white/10">
      <Briefcase size={16} /> <span>Experiência</span>
    </a>
    <a href="#skills" className="flex items-center px-3 py-1.5 space-x-1.5 text-sm font-medium text-white transition-all duration-300 rounded-full hover:bg-white/10">
      <Code size={16} /> <span>Habilidades</span>
    </a>
    <a href="#projects" className="flex items-center px-3 py-1.5 space-x-1.5 text-sm font-medium text-white transition-all duration-300 rounded-full hover:bg-white/10">
      <FolderGit2 size={16} /> <span>Projetos</span>
    </a>
    <a href="#contact" className="flex items-center px-3 py-1.5 space-x-1.5 text-sm font-medium text-white transition-all duration-300 rounded-full hover:bg-white/10">
      <Mail size={16} /> <span>Contato</span>
    </a>
      </nav>
  </motion.header>
)

}
