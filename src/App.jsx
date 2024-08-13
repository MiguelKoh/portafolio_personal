import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About";
import ButtonTop from "./components/ButtonTop";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ButtonTop/>
        <About/>
      </main>
    </>
  );
}

export default App