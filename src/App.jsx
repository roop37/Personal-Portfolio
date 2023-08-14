import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Projects from "./components/projects/Projects";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./App.css";
import Work from "./components/Work/Work";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="sections">
        <Intro />
        <Projects />
        <Portfolio />
        <Work />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
