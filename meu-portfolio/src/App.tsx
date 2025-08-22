import './App.css'
import { StarsBackground } from './components/StarsBackground'
import { Navbar } from './components/layout/Navbar'

export default function App() {
  return (
    <div className="relative min-h-screen text-white">
      <StarsBackground />

      <Navbar />
    </div>
  )
}
