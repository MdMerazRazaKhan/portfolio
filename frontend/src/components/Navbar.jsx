import { NAV_ITEMS } from "../utils/constants";

const Icon = ({ type }) => {
  const common = { className: "nav-icon", width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" };
  if (type === "home") {
    return (
      <svg {...common} aria-hidden>
        <path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-8.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "phone") {
    return (
      <svg {...common} aria-hidden>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h3a1 1 0 0 1 1 .75c.12.72.36 1.42.7 2.06a1 1 0 0 1-.24 1.05L8.21 8.79a16 16 0 0 0 7 7l1.93-1.26a1 1 0 0 1 1.05-.24c.64.34 1.34.58 2.06.7a1 1 0 0 1 .75 1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  // fallback/textpad
  return (
    <svg {...common} aria-hidden>
      <path d="M7 3h8l4 4v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 3v4a1 1 0 0 0 1 1h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const Navbar = ({ theme, onToggleTheme }) => (
  <nav>
    <div className="nav-content">
      <span className="badge">Portfolio</span>
      <div className="nav-links">
        {NAV_ITEMS.map((item) => {
          const label = item.label || "";
          const key = item.href;
          const lower = label.toLowerCase();
          let iconType = "text";
          if (lower.includes("home")) iconType = "home";
          else if (lower.includes("contact") || lower.includes("message")) iconType = "phone";

          return (
            <a key={key} href={item.href} className="nav-link">
              <Icon type={iconType} />
              <span>{label}</span>
            </a>
          );
        })}
        <button type="button" className="theme-toggle" onClick={onToggleTheme}>
          {theme === "dark" ? "Day" : "Night"}
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
