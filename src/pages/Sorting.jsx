import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Sorting.css";

function Sorting() {
  const navigate = useNavigate();

  // Temporary mock result.
  // Later this will come from the YOLO model.
  const result = {
    category: "Recyclable Plastic",
    shortCategory: "recyclable",
    description:
      "This item belongs in the recyclable plastic stream.",
  };

  const handleContinue = () => {
    navigate("/learn");
  };

  return (
    <main className="sorting-page">
      <section className="sorting-section">
        <div className="container">

          {/* Header */}
          <div className="sorting-header">
            <p className="sorting-eyebrow">SMART SORTING</p>

            <h1 className="sorting-title">
              Watch It Get <span>Sorted</span>
            </h1>

            <p className="sorting-description">
              RecycLit has identified your waste. Now let's see where it
              belongs.
            </p>
          </div>

          {/* Sorting stage */}
          <div className="sorting-stage">

            {/* Top status */}
            <div className="sorting-status">
              <div className="sorting-status-icon">
                <CheckCircle2 size={17} />
              </div>

              <div>
                <span>IDENTIFIED AS</span>
                <strong>{result.category}</strong>
              </div>
            </div>

            {/* Waste item */}
            <div className="sorting-object-area">

              <div className="sorting-object-label">
                YOUR WASTE
              </div>

              <div className="sorting-object">
                <div className="sorting-object-shape">
                  ♻
                </div>
              </div>

              {/* Vertical movement path */}
              <div className="sorting-path">
                <div className="sorting-path-line" />
                <div className="sorting-arrow">↓</div>
              </div>

            </div>

            {/* Bins */}
            <div className="sorting-bins">

              <div
                className={`sorting-bin ${
                  result.shortCategory === "recyclable"
                    ? "sorting-bin--active"
                    : ""
                }`}
              >
                <div className="sorting-bin-lid" />

                <div className="sorting-bin-body">
                  <span className="sorting-bin-icon">♻</span>
                  <span className="sorting-bin-name">
                    Recyclable Plastic
                  </span>
                </div>

                {result.shortCategory === "recyclable" && (
                  <div className="sorting-bin-check">
                    <CheckCircle2 size={18} />
                  </div>
                )}
              </div>

              <div
                className={`sorting-bin ${
                  result.shortCategory === "nonrecyclable"
                    ? "sorting-bin--active"
                    : ""
                }`}
              >
                <div className="sorting-bin-lid" />

                <div className="sorting-bin-body">
                  <span className="sorting-bin-icon">×</span>
                  <span className="sorting-bin-name">
                    Non-Recyclable
                  </span>
                </div>

                {result.shortCategory === "nonrecyclable" && (
                  <div className="sorting-bin-check">
                    <CheckCircle2 size={18} />
                  </div>
                )}
              </div>

              <div
                className={`sorting-bin ${
                  result.shortCategory === "metal"
                    ? "sorting-bin--active"
                    : ""
                }`}
              >
                <div className="sorting-bin-lid" />

                <div className="sorting-bin-body">
                  <span className="sorting-bin-icon">●</span>
                  <span className="sorting-bin-name">
                    Metal
                  </span>
                </div>

                {result.shortCategory === "metal" && (
                  <div className="sorting-bin-check">
                    <CheckCircle2 size={18} />
                  </div>
                )}
              </div>

              <div
                className={`sorting-bin ${
                  result.shortCategory === "organic"
                    ? "sorting-bin--active"
                    : ""
                }`}
              >
                <div className="sorting-bin-lid" />

                <div className="sorting-bin-body">
                  <span className="sorting-bin-icon">✦</span>
                  <span className="sorting-bin-name">
                    Organic
                  </span>
                </div>

                {result.shortCategory === "organic" && (
                  <div className="sorting-bin-check">
                    <CheckCircle2 size={18} />
                  </div>
                )}
              </div>

            </div>

            {/* Result message */}
            <div className="sorting-result">

              <p className="sorting-result-label">
                SORTED SUCCESSFULLY
              </p>

              <h2>
                Your waste belongs in the{" "}
                <span>Recyclable Plastic</span> bin.
              </h2>

              <p>
                {result.description}
              </p>

              <button
                className="sorting-continue"
                onClick={handleContinue}
              >
                Learn More About This Waste
                <ArrowRight size={18} />
              </button>

            </div>

          </div>

        </div>
      </section>
    </main>
  );
}

export default Sorting;