import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About";
import ButtonTop from "./components/ButtonTop";
import Experiencia from "./components/Experiencia";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ButtonTop/>
        <About/>
        <Experiencia/>
      </main>
    </>
  );
}

export default App