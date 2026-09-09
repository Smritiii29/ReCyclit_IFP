import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/analyze", label: "Analyze" },
  { to: "/learn", label: "Learn" },
  { to: "/history", label: "History" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__brand" onClick={() => setOpen(false)}>
          <span className="navbar__mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="26" height="26">
              <path
                d="M16 3 L27 9.5 V22.5 L16 29 L5 22.5 V9.5 Z"
                fill="none"
                stroke="var(--color-jade)"
                strokeWidth="2"
              />
              <path
                d="M16 10 L21 16 L16 22 L11 16 Z"
                fill="var(--color-jade)"
              />
            </svg>
          </span>
          <span className="navbar__brand-text">RECYCLIT</span>
        </NavLink>

        <nav className="navbar__links navbar__links--desktop" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                "navbar__link" + (isActive ? " navbar__link--active" : "")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/analyze" className="navbar__cta navbar__cta--desktop">
          Analyze Waste
        </NavLink>

        <button
          className="navbar__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="navbar__mobile">
          <nav className="navbar__links" aria-label="Primary mobile">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  "navbar__link" + (isActive ? " navbar__link--active" : "")
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/analyze"
              className="navbar__cta"
              onClick={() => setOpen(false)}
            >
              Analyze Waste
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
