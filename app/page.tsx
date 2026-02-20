import Hero from './components/Hero';
import Experience from './components/Experience';
import ProjectGrid from './components/ProjectGrid';
import About from './components/About';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
    return (
        <>
            <Hero />
            <Experience />
            <ProjectGrid />
            <About />
            <Achievements />
            <Contact />
            <Footer />
        </>
    );
}
