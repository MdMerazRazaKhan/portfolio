import { useEffect } from "react";
import Home from "./pages/Home";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");

    if (!revealItems.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.15 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`app-shell theme-${theme}`}>
      <Home />
    </div>
  );
}

export default App;
