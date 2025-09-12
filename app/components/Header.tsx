import { Home, User, Briefcase, Code, FolderGit2, Mail } from "lucide-react"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-8 py-4 border-b border-gray-800 bg-black/50 backdrop-blur-md">
      {/* Nome com gradiente animado */}
      <h1 className="text-lg font-bold animate-gradient">Leandro Esmerdel</h1>

      {/* Menu */}
      <nav className="flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-full bg-black/50">
        <button className="flex items-center px-4 py-2 space-x-2 font-medium text-white transition-all duration-300 rounded-full hover:bg-white/10">
          <Home size={18} /> <span>Home</span>
        </button>
        <button className="flex items-center px-4 py-2 space-x-2 font-medium text-white transition-all duration-300 rounded-full hover:bg-white/10">
          <User size={18} /> <span>About</span>
        </button>
        <button className="flex items-center px-4 py-2 space-x-2 font-medium text-white transition-all duration-300 rounded-full hover:bg-white/10">
          <Briefcase size={18} /> <span>Experience</span>
        </button>
        <button className="flex items-center px-4 py-2 space-x-2 font-medium text-white transition-all duration-300 rounded-full hover:bg-white/10">
          <Code size={18} /> <span>Skills</span>
        </button>
        <button className="flex items-center px-4 py-2 space-x-2 font-medium text-white transition-all duration-300 rounded-full hover:bg-white/10">
          <FolderGit2 size={18} /> <span>Projects</span>
        </button>
        <button className="flex items-center px-4 py-2 space-x-2 font-medium text-white transition-all duration-300 rounded-full hover:bg-white/10">
          <Mail size={18} /> <span>Contact</span>
        </button>
      </nav>
    </header>
  )
}
