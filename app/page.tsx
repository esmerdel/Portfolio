import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-transparent text-white">
      <Header />
      <Hero />
      <About />
    </main>
  )
}
