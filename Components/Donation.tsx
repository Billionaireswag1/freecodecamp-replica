import React, { useState } from "react";

const Donation = () => {
  const [progress] = useState(52); 

  return (
    <section
      className="container my-5 p-4 text-center"
      style={{
        background: "linear-gradient(to bottom, #fbd3e9, #bbd2c5)",
        border: "1px solid #ccc",
        borderRadius: "6px",
      }}
    >
      <h3 className="fw-bold mb-3" style={{ color: "#206a83" }}>
        Progress towards donation goal
      </h3>

      <p className="fs-5 mb-2 fw-semibold">{progress}%</p>

      <div className="progress mb-4" style={{ height: "20px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{
            width: `${progress}%`,
            transition: "width 1s ease-in-out",
            backgroundColor: "#337ab7",
          }}
        ></div>
      </div>

      <p className="fs-5 text-primary">
        Donate now to help our charity reach our goal of 20,000 monthly supporters this year.
      </p>

      <button
        className="btn btn-light border mt-3"
        style={{ padding: "8px 20px", fontWeight: "600" }}
      >
        Donate
      </button>
    </section>
  );
};

export default Donation;
