import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About";
import ButtonTop from "./components/ButtonTop";
import Experiencia from "./components/Experiencia";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ButtonTop/>
        <About/>
        <Experiencia/>
        <Projects/>
      </main>
    </>
  );
}

export default App