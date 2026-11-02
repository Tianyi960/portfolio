import { useRef, useState } from "react";
import { NavLink } from "react-router";

const navigationLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/Research", label: "Research" },
  { to: "/Publications", label: "Publications" },
  { to: "/Contact", label: "Contact" },
];

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef(null);

  const closeNavigation = () => {
    setMenuOpen(false);
    if (window.matchMedia("(max-width: 992px)").matches) {
      window.scrollTo(0, 0);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape" && menuOpen) {
      setMenuOpen(false);
      toggleRef.current?.focus();
    }
  };

  return (
    <aside className="sidebar" onKeyDown={handleKeyDown}>
      <div className="sidebar-header">
        <h2 className="logo">Tianyi Zhang</h2>
        <button
          ref={toggleRef}
          className="sidebar-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d={menuOpen ? "M6 6l12 12M6 18 18 6" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      <nav id="primary-navigation" className={"sidebar-nav" + (menuOpen ? " is-open" : "")} aria-label="Main navigation">
        {navigationLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            onClick={closeNavigation}
            className={({ isActive }) => "nav-item" + (isActive ? " nav-item-active" : "")}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
