export async function getPrediction(
  score: number,
  present: number,
  level: number
) {
  const response = await fetch("http://localhost:8000/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ score, present, level }),
  });

  if (!response.ok) throw new Error("Failed to fetch prediction");

  return response.json();
}

export async function fetchAllPredictions() {
  const response = await fetch("http://localhost:8000/predictions");
  if (!response.ok) throw new Error("Failed to fetch prediction logs");
  return response.json();
}
