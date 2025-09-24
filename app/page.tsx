import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent text-white">
      <Header />
      <Hero />
      <About />
      <Experience />
    </main>
  )
}
