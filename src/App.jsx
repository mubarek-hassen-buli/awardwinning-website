import Hero from './components/Hero'
import About from './components/About'
import NavBar from './components/Navbar'
import { BentoGridDemo } from './components/Cast'
// import Stack from "./components/Stack.jsx";
import RanksAndClans from "./components/RanksAndClans.jsx";
import StoryArcs from "./components/StoryArcs.jsx";
import Character from "./components/Characters.jsx";
import Footer from "./components/Footer.jsx";
// const images = [
//     { id: 1, img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format" },
//     { id: 2, img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format" },
//     { id: 3, img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format" },
//     { id: 4, img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format" }
// ];

function App() {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden bg-black">
            <NavBar />
            <Hero />
            <About />
            <BentoGridDemo />
            {/*<Stack*/}
            {/*    randomRotation={true}*/}
            {/*    sensitivity={180}*/}
            {/*    sendToBackOnClick={false}*/}
            {/*    cardDimensions={{ width: 200, height: 200 }}*/}
            {/*    cardsData={images}*/}
            {/*/>*/}
            <RanksAndClans />
            <StoryArcs />
            <Character />
            <Footer />
        </main>
    )
}

export default App
