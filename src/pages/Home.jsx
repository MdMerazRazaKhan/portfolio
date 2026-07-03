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
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Activities />
        <Contact />
        <ContactForm />
        <DownloadCV />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
