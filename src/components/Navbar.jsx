import { NAV_ITEMS } from "../utils/constants";

const Navbar = ({ theme, onToggleTheme }) => (
  <nav>
    <div className="nav-content">
      <span className="badge">Portfolio</span>
      <div className="nav-links">
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <button type="button" className="theme-toggle" onClick={onToggleTheme}>
          {theme === "dark" ? "Day" : "Night"}
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
