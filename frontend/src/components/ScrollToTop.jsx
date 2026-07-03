import useScroll from "../hooks/useScroll.js";

const ScrollToTop = () => {
  const scrollY = useScroll();

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (scrollY < 300) {
    return null;
  }

  return (
    <button className="scroll-top" onClick={handleClick} aria-label="Scroll to top">
      ?
    </button>
  );
};

export default ScrollToTop;
