import { useClassification } from "../ClassificationContext.jsx";
import { ArrowRight, CheckCircle2, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Result.css";

function Result() {
  const navigate = useNavigate();

  // Temporary mock result.
  // This will later come from the YOLO model.
  const { classification } = useClassification();
  const result = classification;
 

  const handleSort = () => {
    navigate("/sorting");
  };

  const handleAnalyzeAgain = () => {
    navigate("/analyze");
  };

  return (
    <main className="result-page">
      <section className="result-section">
        <div className="container">

          {/* Header */}
          <div className="result-header">
            <p className="result-eyebrow">ANALYSIS COMPLETE</p>

            <h1 className="result-title">
              We Found a <span>Match</span>
            </h1>

            <p className="result-description">
              Your waste has been analyzed. Here's where it belongs.
            </p>
          </div>

          {/* Result Card */}
          <div className="result-card">

            <div className="result-status">
              <CheckCircle2 size={20} />
              <span>Classification successful</span>
            </div>

            <div className="result-main">

              {/* Waste visual */}
              <div className="result-visual">
                <div className="result-visual-circle">
                  <div className="result-placeholder">
                    ♻
                  </div>
                </div>
              </div>

              {/* Result information */}
              <div className="result-content">

                <p className="result-label">IDENTIFIED AS</p>

                <h2>{result.category}</h2>

                <p className="result-text">
                  {result.description}
                </p>

                {/* Confidence */}
                <div className="confidence-section">

                  <div className="confidence-header">
                    <span>AI confidence</span>
                    <strong>{result.confidence}%</strong>
                  </div>

                  <div className="confidence-bar">
                    <div
                      className="confidence-fill"
                      style={{
                        width: `${result.confidence}%`,
                      }}
                    />
                  </div>

                </div>

                {/* Action */}
                <button
                  className="result-sort-button"
                  onClick={handleSort}
                >
                  See It Get Sorted
                  <ArrowRight size={18} />
                </button>

              </div>

            </div>

          </div>

          {/* Secondary action */}
          <button
            className="analyze-again-button"
            onClick={handleAnalyzeAgain}
          >
            <RotateCcw size={16} />
            Analyze another item
          </button>

        </div>
      </section>
    </main>
  );
}

export default Result;