import { createRoot } from "react-dom/client";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";

const App = () => {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </main>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);