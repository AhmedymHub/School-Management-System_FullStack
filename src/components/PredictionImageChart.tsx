"use client";

import Image from "next/image";

const PredictionImageChart = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Prediction Chart</h2>
      <img
        src="http://localhost:8000/chart"
        alt="Prediction Chart"
        style={{
          maxWidth: "100%",
          borderRadius: "12px",
          border: "1px solid #ddd",
        }}
      />
    </div>
  );
};

export default PredictionImageChart;
