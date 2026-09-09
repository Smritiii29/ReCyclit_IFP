// export default function Home() {
//   return (
//     <div className="container section">
//       <h1>Understand Your Waste. Sort It Better.</h1>
//       <p className="body-lg" style={{ marginTop: "1rem", maxWidth: "560px" }}>
//         RecycLit combines intelligent image analysis with smart segregation
//         to help you understand where your waste belongs.
//       </p>
//       <p className="body" style={{ marginTop: "2rem" }}>
//         This is a scaffold placeholder — the full Home page (hero visual,
//         how-it-works, analyze preview, category cards, and impact section)
//         is built in the next step.
//       </p>
//     </div>
//   );
// }
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Camera,
  ScanSearch,
  ArrowDown,
  Recycle,
  Ban,
  CircleDot,
  Leaf,
} from "lucide-react";

import { wasteCategories } from "../data/wasteCategories.js";
import "./Home.css";

export default function Home() {
  const categoryIcons = {
    Recycle,
    Ban,
    CircleDot,
    Leaf,
  };

  return (
    <div className="home">
      {/* =====================================================
          HERO SECTION
          ===================================================== */}
      <section className="home__hero">
        <div className="container home__hero-inner">
          <div className="home__hero-content">
            <span className="label home__eyebrow">
              SMART WASTE SEGREGATION
            </span>

            <h1 className="home__title">
              Recyc<span>Lit</span>
            </h1>

            <h2 className="home__tagline">
              Understand Your Waste.
              <br />
              Sort It Better.
            </h2>

            <p className="body-lg home__description">
              An intelligent waste-segregation experience that helps you
              identify where your waste belongs.
            </p>

            <div className="home__hero-actions">
              <Link to="/analyze" className="home__primary-button">
                Analyze My Waste
                <ArrowRight size={19} strokeWidth={2.2} />
              </Link>

              <a href="#how-it-works" className="home__secondary-link">
                How it works
                <ArrowDown size={16} />
              </a>
            </div>
          </div>

          {/* Hero visual */}
          <div className="home__hero-visual" aria-label="RecycLit waste sorting concept">
            <div className="home__visual-glow" />

            <div className="home__visual-scan">
              <div className="home__scan-line" />
            </div>

            {/* Waste object */}
            <div className="home__waste-object">
              <div className="home__waste-cap" />
              <div className="home__waste-label">
                <span>PLASTIC</span>
              </div>
            </div>

            {/* Analysis indicator */}
            <div className="home__analysis-card">
              <ScanSearch size={18} />
              <div>
                <span>ANALYZING</span>
                <strong>Waste detected</strong>
              </div>
            </div>

            {/* Sorting path */}
            <div className="home__sorting-path">
              <span className="home__path-dot home__path-dot--one" />
              <span className="home__path-dot home__path-dot--two" />
              <span className="home__path-dot home__path-dot--three" />
            </div>

            {/* Mini bins */}
            <div className="home__mini-bins">
              <div className="home__mini-bin home__mini-bin--jade">
                <div className="home__mini-bin-lid" />
                <div className="home__mini-bin-body">
                  <Recycle size={22} />
                </div>
                <span>PLASTIC</span>
              </div>

              <div className="home__mini-bin home__mini-bin--blue">
                <div className="home__mini-bin-lid" />
                <div className="home__mini-bin-body">
                  <CircleDot size={22} />
                </div>
                <span>METAL</span>
              </div>

              <div className="home__mini-bin home__mini-bin--green">
                <div className="home__mini-bin-lid" />
                <div className="home__mini-bin-body">
                  <Leaf size={22} />
                </div>
                <span>ORGANIC</span>
              </div>
            </div>

            <div className="home__visual-caption">
              <span className="home__status-dot" />
              Intelligent sorting
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
          ===================================================== */}
      <section
        id="how-it-works"
        className="section home__how"
      >
        <div className="container">
          <div className="home__section-heading">
            <span className="label">THE PROCESS</span>

            <h2>How RecycLit Works</h2>

            <p className="body">
              From capturing an item to understanding where it belongs.
            </p>
          </div>

          <div className="home__steps">
            <article className="home__step">
              <div className="home__step-number">01</div>

              <div className="home__step-icon">
                <Camera size={25} />
              </div>

              <div>
                <h3>Capture</h3>
                <p className="body">
                  Upload an image or take a photo of the waste.
                </p>
              </div>
            </article>

            <div className="home__step-connector" />

            <article className="home__step">
              <div className="home__step-number">02</div>

              <div className="home__step-icon">
                <ScanSearch size={25} />
              </div>

              <div>
                <h3>Analyze</h3>
                <p className="body">
                  Identify the waste and determine its category.
                </p>
              </div>
            </article>

            <div className="home__step-connector" />

            <article className="home__step">
              <div className="home__step-number">03</div>

              <div className="home__step-icon">
                <Recycle size={25} />
              </div>

              <div>
                <h3>Sort</h3>
                <p className="body">
                  See where the waste belongs and why.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          CURRENTLY SUPPORTED
          ===================================================== */}
      <section className="section home__categories">
        <div className="container">
          <div className="home__section-heading">
            <span className="label">RECYCLIT CATEGORIES</span>

            <h2>Currently Supported</h2>

            <p className="body">
              RecycLit currently organizes waste into four primary categories.
            </p>
          </div>

          <div className="home__category-grid">
            {wasteCategories.map((category) => {
              const Icon = categoryIcons[category.icon];

              return (
                <article
                  className="home__category-card"
                  key={category.id}
                  style={{
                    "--category-color": `var(${category.colorVar})`,
                  }}
                >
                  <div className="home__category-top">
                    <span className="home__category-number">
                      {String(
                        wasteCategories.indexOf(category) + 1
                      ).padStart(2, "0")}
                    </span>

                    <div className="home__category-icon">
                      {Icon && <Icon size={24} />}
                    </div>
                  </div>

                  <h3>{category.name}</h3>

                  <p className="body">
                    {category.description}
                  </p>

                  <div className="home__category-example">
                    <span>Examples</span>
                    <p>
                      {category.examples.slice(0, 2).join(" • ")}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL ANALYZE CTA
          ===================================================== */}
      <section className="home__final-cta">
        <div className="container">
          <div className="home__final-cta-inner">
            <div>
              <span className="label">READY?</span>

              <h2>Identify your waste.</h2>

              <p className="body">
                Upload a photo and discover where it belongs.
              </p>
            </div>

            <Link to="/analyze" className="home__primary-button">
              Analyze My Waste
              <ArrowRight size={19} strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}