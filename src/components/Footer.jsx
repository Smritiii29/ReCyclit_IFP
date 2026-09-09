import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__title">RecycLit</span>
          <span className="footer__tagline">Smart Waste Segregation</span>
        </div>

        <nav className="footer__links" aria-label="Footer">
          <Link to="/">Home</Link>
          <Link to="/analyze">Analyze</Link>
          <Link to="/learn">Learn</Link>
          <Link to="/history">History</Link>
        </nav>
      </div>
    </footer>
  );
}
