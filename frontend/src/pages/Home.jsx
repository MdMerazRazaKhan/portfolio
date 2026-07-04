import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Achievements from "../components/Achievements";
import Activities from "../components/Activities";
import Contact from "../components/Contact";
import ContactForm from "../components/ContactForm";
import DownloadCV from "../components/DownloadCV";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function Home({ theme, onToggleTheme }) {
  return (
    <>
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <main>
        <div data-reveal>
          <Hero />
        </div>
        <div data-reveal>
          <About />
        </div>
        <div data-reveal>
          <Skills />
        </div>
        <div data-reveal>
          <Achievements />
        </div>
        <div data-reveal>
          <Activities />
        </div>
        <div data-reveal>
          <Contact />
        </div>
        <div data-reveal>
          <ContactForm />
        </div>
        <div data-reveal>
          <DownloadCV />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
