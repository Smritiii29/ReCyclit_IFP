import { ArrowLeft, ArrowRight, CheckCircle2, Leaf, Recycle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Learn.css";

function Learn() {
  const navigate = useNavigate();

  // Temporary mock category.
  // Later, this will come from the actual AI classification result.
  const selectedCategory = "recyclable";

  // Educational information for all four supported waste categories.
  const wasteEducation = {
    recyclable: {
      category: "Recyclable Plastic",
      icon: Recycle,
      description:
        "Recyclable plastic refers to plastic items that can be collected and processed into materials for making new products.",
      examples: [
        "Plastic bottles",
        "Clean food and beverage containers",
        "Plastic packaging accepted by local recycling systems",
      ],
      disposal: [
        "Empty the container completely.",
        "Rinse away significant leftover residue when necessary.",
        "Place the item in the appropriate recyclable-plastic stream.",
      ],
      whyItMatters:
        "Separating recyclable plastic from other waste helps keep useful materials in the recycling stream and reduces unnecessary disposal.",
    },

    nonrecyclable: {
      category: "Non-Recyclable Plastic",
      icon: Recycle,
      description:
        "Non-recyclable plastic includes plastic items that cannot be effectively processed through the available recycling system.",
      examples: [
        "Certain multilayer or composite packaging",
        "Heavily contaminated plastic items",
        "Plastic items not accepted by the local recycling system",
      ],
      disposal: [
        "Remove any remaining contents where appropriate.",
        "Do not mix it with recyclable plastic.",
        "Place it in the designated non-recyclable or residual-waste stream.",
      ],
      whyItMatters:
        "Keeping non-recyclable plastics separate prevents unsuitable materials from contaminating recyclable waste.",
    },

    metal: {
      category: "Metal",
      icon: CheckCircle2,
      description:
        "Metal waste includes items made primarily from materials such as aluminium or steel that can often be recovered and recycled.",
      examples: [
        "Aluminium cans",
        "Steel food cans",
        "Small metal containers and household items",
      ],
      disposal: [
        "Empty the item and remove obvious leftover contents.",
        "Keep metal separate from other waste categories.",
        "Place it in the designated metal or recyclable-metal stream.",
      ],
      whyItMatters:
        "Recovering metal allows valuable materials to be reused and reduces the need for extracting new raw materials.",
    },

    organic: {
      category: "Organic",
      icon: Leaf,
      description:
        "Organic waste is biodegradable material that comes from plants, animals, or food and can naturally break down under suitable conditions.",
      examples: [
        "Fruit and vegetable peels",
        "Food scraps",
        "Garden and plant waste",
      ],
      disposal: [
        "Keep organic waste separate from dry recyclable materials.",
        "Avoid mixing it with plastic, metal, or other non-organic waste.",
        "Place it in the designated organic or compostable-waste stream.",
      ],
      whyItMatters:
        "Separating organic waste makes it easier to treat through processes such as composting and helps reduce contamination of other waste streams.",
    },
  };

  const waste = wasteEducation[selectedCategory];
  const WasteIcon = waste.icon;

  return (
    <main className="learn-page">
      <section className="learn-section">
        <div className="container">

          {/* Header */}
          <div className="learn-header">
            <p className="learn-eyebrow">WASTE EDUCATION</p>

            <h1 className="learn-title">
              Know Your <span>Waste</span>
            </h1>

            <p className="learn-description">
              Learn what this waste category means, what belongs in it,
              and how it should be disposed of.
            </p>
          </div>

          {/* Selected category */}
          <div className="learn-category-card">
            <div className="learn-category-icon">
              <WasteIcon size={30} strokeWidth={1.8} />
            </div>

            <div className="learn-category-content">
              <p className="learn-label">YOUR ITEM WAS IDENTIFIED AS</p>

              <h2>{waste.category}</h2>

              <p>{waste.description}</p>
            </div>

            <div className="learn-confirmed">
              <CheckCircle2 size={17} />
              <span>Classification confirmed</span>
            </div>
          </div>

          {/* Information cards */}
          <div className="learn-grid">

            {/* Examples */}
            <article className="learn-info-card">
              <div className="learn-card-heading">
                <div className="learn-small-icon">
                  <WasteIcon size={18} />
                </div>

                <div>
                  <p className="learn-card-label">COMMON EXAMPLES</p>
                  <h3>What belongs here?</h3>
                </div>
              </div>

              <ul className="learn-list">
                {waste.examples.map((example) => (
                  <li key={example}>
                    <span />
                    {example}
                  </li>
                ))}
              </ul>
            </article>

            {/* Disposal */}
            <article className="learn-info-card">
              <div className="learn-card-heading">
                <div className="learn-small-icon">
                  <CheckCircle2 size={18} />
                </div>

                <div>
                  <p className="learn-card-label">RIGHT DISPOSAL</p>
                  <h3>How should you sort it?</h3>
                </div>
              </div>

              <ol className="learn-steps">
                {waste.disposal.map((step, index) => (
                  <li key={step}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
            </article>

          </div>

          {/* Why it matters */}
          <div className="learn-why-card">
            <div className="learn-why-icon">
              <Leaf size={20} />
            </div>

            <div>
              <p className="learn-card-label">WHY IT MATTERS</p>
              <h3>Small sorting decisions make a difference.</h3>
              <p>{waste.whyItMatters}</p>
            </div>
          </div>

          {/* Local-rules note */}
          <div className="learn-note">
            <div className="learn-note-mark">i</div>

            <div>
              <strong>A quick reminder</strong>
              <p>
                Recycling and waste-disposal rules can vary between locations.
                Always follow the guidance provided by your local waste
                management system.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="learn-actions">
            <button
              className="learn-home-button"
              onClick={() => navigate("/")}
            >
              <ArrowLeft size={17} />
              Back to Home
            </button>

            <button
              className="learn-analyze-button"
              onClick={() => navigate("/analyze")}
            >
              Analyze Another Item
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Learn;