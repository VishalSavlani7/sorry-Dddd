import React, { useState } from "react";
import sampleImage from "./images/sorry.jpg";
import sample2Image from "./images/plss.jpeg";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const handleYesClick = () => {
    alert("Thank You so much Dddddd....I LOVE YOU");
  };

  const handleNoClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "50px",
        backgroundColor: "pink",
        height: "43rem",
      }}
    >
      <img
        src={sampleImage} // Use the imported image here
        alt="Sample"
        style={{ marginBottom: "20px" }}
      />
      <div>
        <button onClick={handleYesClick} style={{ padding: "10px" }}>
          Yes
        </button>
        <button
          onClick={handleNoClick}
          style={{ marginLeft: "20px", padding: "10px" }}
        >
          No
        </button>
      </div>

      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "300px",
              padding: "20px",
              backgroundColor: "white",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <img
              src={sample2Image} // Use the imported image here
              alt="Sample"
              style={{ marginBottom: "20px" }}
            />
            <button onClick={handleClosePopup}>Back</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
