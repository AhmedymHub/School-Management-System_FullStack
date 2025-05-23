"use client";

import { useEffect, useState } from "react";
import { fetchAllPredictions } from "@/lib/mlApi";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Prediction = {
  score: number;
  present: number;
  level: number;
  prediction: number;
};

const PredictionChart = () => {
  const [data, setData] = useState<Prediction[]>([]);

  useEffect(() => {
    async function loadData() {
      try {
        const rawData = await fetchAllPredictions();
        const formatted = rawData.map((item: Prediction, index: number) => ({
          ...item,
          name: `#${index + 1}`,
        }));
        setData(formatted);
      } catch (err) {
        console.error("Error loading predictions:", err);
      }
    }
    loadData();
  }, []);

  return (
    <div className="bg-white p-4 rounded-md shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">Prediction History</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="score" stroke="#8884d8" name="Score" />
          <Line
            type="monotone"
            dataKey="present"
            stroke="#82ca9d"
            name="Present"
          />
          <Line
            type="monotone"
            dataKey="prediction"
            stroke="#ff7300"
            name="Prediction"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PredictionChart;
