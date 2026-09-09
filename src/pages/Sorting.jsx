import { useState } from "react";
import { ArrowRight, CheckCircle2, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Sorting.css";

function Sorting() {
  const navigate = useNavigate();
  const [animationKey, setAnimationKey] = useState(0);

  // Temporary mock result.
  // Later this will come directly from the YOLO model.
  const result = {
    category: "Recyclable Plastic",
    type: "recyclable",
    confidence: 94,
    description:
      "This item belongs in the recyclable plastic stream.",
  };

  const bins = [
    {
      id: "recyclable",
      label: "Recyclable Plastic",
      symbol: "♻",
    },
    {
      id: "nonrecyclable",
      label: "Non-Recyclable",
      symbol: "×",
    },
    {
      id: "metal",
      label: "Metal",
      symbol: "●",
    },
    {
      id: "organic",
      label: "Organic",
      symbol: "✦",
    },
  ];

  const handleContinue = () => {
    navigate("/learn");
  };

  const handleAgain = () => {
    navigate("/analyze");
  };

  const handleReplay = () => {
    setAnimationKey((currentKey) => currentKey + 1);
  };

  return (
    <main className="sorting-page">
      <section className="sorting-section">
        <div className="container">

          {/* =========================================
              HEADER
              ========================================= */}

          <div className="sorting-header">
            <p className="sorting-eyebrow">SMART SORTING</p>

            <h1 className="sorting-title">
              Watch It Get <span>Sorted</span>
            </h1>

            <p className="sorting-description">
              RecycLit has identified your waste. Watch it find its way
              to the right bin.
            </p>
          </div>


          {/* =========================================
              SORTING MACHINE
              ========================================= */}

          <div className="sorting-machine">

            {/* Top classification status */}

            <div className="sorting-status">
              <div className="sorting-status-check">
                <CheckCircle2 size={17} />
              </div>

              <div>
                <span>IDENTIFIED AS</span>
                <strong>{result.category}</strong>
              </div>
            </div>


            {/* =========================================
                ANIMATION AREA
                ========================================= */}

            <div
              key={animationKey}
              className={`sorting-animation sorting-target--${result.type}`}
            >

              {/* "AI SORTING" label */}

              <div className="sorting-machine-label">
                <span className="sorting-pulse" />
                AI SORTING
              </div>


              {/* Waste object */}

              <div className="sorting-waste">
                <div className="sorting-waste-bottle">

                  <div className="bottle-cap" />

                  <div className="bottle-neck" />

                  <div className="bottle-body">
                    <span>♻</span>
                  </div>

                </div>
              </div>


              {/* Flight trail */}

              <div className="sorting-flight-trail">
                <span />
                <span />
                <span />
              </div>


              {/* Target marker */}

              <div className="sorting-target-marker">
                <span>DROP HERE</span>
                <div />
              </div>

            </div>


            {/* =========================================
                BINS
                ========================================= */}

            <div className="sorting-bins">

              {bins.map((bin) => (
                <div
                  key={bin.id}
                  className={`sorting-bin ${
                    result.type === bin.id
                      ? "sorting-bin--target"
                      : ""
                  }`}
                >

                  {/* Bin lid */}

                  <div className="sorting-bin-lid">
                    <div className="sorting-bin-handle" />
                  </div>


                  {/* Bin body */}

                  <div className="sorting-bin-body">

                    <div className="sorting-bin-symbol">
                      {bin.symbol}
                    </div>

                    <span className="sorting-bin-label">
                      {bin.label}
                    </span>

                  </div>


                  {/* Wheels */}

                  <div className="sorting-wheel sorting-wheel--left" />
                  <div className="sorting-wheel sorting-wheel--right" />


                  {/* Target indicator */}

                  {result.type === bin.id && (
                    <div className="sorting-target-badge">
                      <CheckCircle2 size={16} />
                    </div>
                  )}

                </div>
              ))}

            </div>


            {/* =========================================
                SUCCESS STATE
                ========================================= */}

            <div className="sorting-success">

              <div className="sorting-success-particles">
                <span>✦</span>
                <span>✧</span>
                <span>✦</span>
                <span>·</span>
                <span>✧</span>
              </div>

              <p className="sorting-success-label">
                SORTED SUCCESSFULLY
              </p>

              <h2>
                Your waste belongs in the{" "}
                <span>{result.category}</span> bin.
              </h2>

              <p className="sorting-success-description">
                {result.description}
              </p>

              <div className="sorting-actions">

                <button
                  className="sorting-replay-button"
                  onClick={handleReplay}
                >
                  <RotateCcw size={16} />
                  See Animation Again
                </button>

                <button
                  className="sorting-learn-button"
                  onClick={handleContinue}
                >
                  Learn More About This Waste
                  <ArrowRight size={18} />
                </button>

                <button
                  className="sorting-again-button"
                  onClick={handleAgain}
                >
                  Analyze another item
                </button>

              </div>

            </div>

          </div>

        </div>
      </section>
    </main>
  );
}

export default Sorting;