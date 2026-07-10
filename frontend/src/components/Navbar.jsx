import { NAV_ITEMS } from "../utils/constants";
import { useTheme } from "../context/ThemeContext";

const Icon = ({ type }) => {
  const common = { className: "nav-icon", width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" };
  
  if (type === "home") {
    return (
      <svg {...common} aria-hidden>
        <path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-8.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "about") {
    return (
      <svg {...common} aria-hidden>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "skills") {
    return (
      <svg {...common} aria-hidden>
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 4l-4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "experience") {
    return (
      <svg {...common} aria-hidden>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "projects") {
    return (
      <svg {...common} aria-hidden>
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "achievements") {
    return (
      <svg {...common} aria-hidden>
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34M12 2a5 5 0 0 1 5 5c0 3.33-2.67 5-5 5s-5-1.67-5-5a5 5 0 0 1 5-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "education") {
    return (
      <svg {...common} aria-hidden>
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "contact") {
    return (
      <svg {...common} aria-hidden>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h3a1 1 0 0 1 1 .75c.12.72.36 1.42.7 2.06a1 1 0 0 1-.24 1.05L8.21 8.79a16 16 0 0 0 7 7l1.93-1.26a1 1 0 0 1 1.05-.24c.64.34 1.34.58 2.06.7a1 1 0 0 1 .75 1z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "message") {
    return (
      <svg {...common} aria-hidden>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "download") {
    return (
      <svg {...common} aria-hidden>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      <div className="nav-content">
        <div className="nav-links">
          {NAV_ITEMS.map((item) => {
            const label = item.label || "";
            const key = item.href;
            const lower = label.toLowerCase();
            let iconType = "text";
            
            if (lower.includes("home")) iconType = "home";
            else if (lower.includes("about")) iconType = "about";
            else if (lower.includes("skill")) iconType = "skills";
            else if (lower.includes("experience")) iconType = "experience";
            else if (lower.includes("project")) iconType = "projects";
            else if (lower.includes("achievement")) iconType = "achievements";
            else if (lower.includes("education")) iconType = "education";
            else if (lower.includes("contact")) iconType = "contact";
            else if (lower.includes("send") || lower.includes("message")) iconType = "message";
            else if (lower.includes("download") || lower.includes("cv")) iconType = "download";

            return (
              <a key={key} href={item.href} className="nav-link">
                <Icon type={iconType} />
                <span>{label}</span>
              </a>
            );
          })}
        </div>
        
        <button 
          type="button" 
          className="theme-icon-toggle-btn" 
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <>
              <svg className="nav-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.62" x2="19.78" y2="4.2"></line></svg>
              <span style={{ fontSize: "0.78rem", fontWeight: "600" }}>Light</span>
            </>
          ) : (
            <>
              <svg className="nav-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              <span style={{ fontSize: "0.78rem", fontWeight: "600" }}>Dark</span>
            </>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
