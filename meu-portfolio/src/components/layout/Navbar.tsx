export function Navbar() {
  return (
    <header
      className="
        fixed top-0 left-0 w-full
        flex justify-between items-center
        px-8 py-4
        bg-black/40 backdrop-blur-md
        border-b border-gray-800
        z-50
      "
    >
      {/* Logo / Nome */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center">
          <span className="text-white font-bold">L</span>
        </div>
        <div>
          <h1 className="text-lg font-bold">Leandro Esmerdelllll</h1>
          <p className="text-sm text-gray-400">Fullstack Developer</p>
        </div>
      </div>

      {/* Links do Menu */}
      <nav>
        <ul className="flex gap-6 text-sm">
          <li><a href="#home" className="hover:text-purple-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-purple-400 transition">About</a></li>
          <li><a href="#experience" className="hover:text-purple-400 transition">Experience</a></li>
          <li><a href="#skills" className="hover:text-purple-400 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-purple-400 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
