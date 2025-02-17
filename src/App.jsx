import Hero from './components/Hero'
import About from './components/About'
import NavBar from './components/Navbar'
import { BentoGridDemo } from './components/Cast'
function App() {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <NavBar />
            <Hero />
            <About />
            <BentoGridDemo />
            {/* <section className="z-0 min-h-screen " /> */}
        </main>
    )
}

export default App
