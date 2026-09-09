import { useRef, useState } from "react";
import { Camera, ImagePlus, Upload, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Analyze.css";

function Analyze() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);
  };

  const handleChooseImage = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleAnalyze = () => {
    if (!selectedImage) return;

    // Temporary navigation.
    // We will connect this to the actual AI model later.
    navigate("/result");
  };

  return (
    <main className="analyze-page">
      <section className="analyze-section">
        <div className="container">

          {/* Page introduction */}
          <div className="analyze-header">
            <p className="analyze-eyebrow">WASTE ANALYSIS</p>

            <h1 className="analyze-title">
              Analyze Your <span>Waste</span>
            </h1>

            <p className="analyze-description">
              Upload an image or take a photo to find out where your waste
              belongs.
            </p>
          </div>

          {/* Upload area */}
          <div className="analyze-card">

            {!selectedImage ? (
              <div className="upload-state">

                <div className="upload-icon">
                  <ImagePlus size={30} strokeWidth={1.8} />
                </div>

                <h2>Upload your waste image</h2>

                <p>
                  Choose an image from your device or take a photo using
                  your camera.
                </p>

                <div className="upload-actions">

                  <button
                    className="analyze-button analyze-button--primary"
                    onClick={handleChooseImage}
                  >
                    <Upload size={18} />
                    Choose Image
                  </button>

                  <button
                    className="analyze-button analyze-button--secondary"
                    onClick={handleChooseImage}
                  >
                    <Camera size={18} />
                    Take a Photo
                  </button>

                </div>

                <span className="upload-note">
                  JPG, PNG or WEBP · One waste item at a time
                </span>

              </div>
            ) : (
              <div className="preview-state">

                <div className="preview-header">
                  <div>
                    <p className="preview-label">IMAGE READY</p>
                    <h2>Ready to analyze</h2>
                  </div>

                  <button
                    className="remove-image"
                    onClick={handleRemoveImage}
                    aria-label="Remove image"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="image-preview">
                  <img
                    src={selectedImage}
                    alt="Selected waste"
                  />
                </div>

                <button
                  className="analyze-button analyze-button--analyze"
                  onClick={handleAnalyze}
                >
                  Analyze Waste
                  <span>→</span>
                </button>

              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={handleImageSelect}
              hidden
            />

          </div>

          {/* Small supporting information */}
          <div className="analyze-info">

            <div className="analyze-info-item">
              <span className="info-number">01</span>
              <div>
                <h3>Capture</h3>
                <p>Upload or photograph the waste item.</p>
              </div>
            </div>

            <div className="analyze-info-item">
              <span className="info-number">02</span>
              <div>
                <h3>Analyze</h3>
                <p>Our AI identifies the waste category.</p>
              </div>
            </div>

            <div className="analyze-info-item">
              <span className="info-number">03</span>
              <div>
                <h3>Sort</h3>
                <p>See where the item belongs and why.</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}

export default Analyze;