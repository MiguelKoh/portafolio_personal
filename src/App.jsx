import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About";
import ButtonTop from "./components/ButtonTop";
import Experiencia from "./components/Experiencia";
import Projects from "./components/Projects";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer"
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init({
    duration: 800,
    once: true,
    easing: "ease-out"
  });

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ButtonTop/>
        <About/>
        <Experiencia/>
        <Projects/>
        <Contacto/>
      </main>
      <Footer/>
    </>
  );
}

export default App