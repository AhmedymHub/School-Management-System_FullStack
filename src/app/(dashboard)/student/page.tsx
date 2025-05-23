"use client";

// import { useEffect, useState } from "react";
// import { getPrediction } from "@/lib/mlApi";
import BigCalendar from "@/components/BigCalender";
import EventCalendar from "@/components/EventCalendar";
import Announcements from "@/components/Announcements";
// import PredictionChart from "@/components/PredictionCharts";
// import PredictionImageChart from "@/components/PredictionImageChart";

const StudentPage = () => {
  // const [prediction, setPrediction] = useState<string | null>(null);

  // useEffect(() => {
  //   async function fetchPrediction() {
  //     try {
  //       const result = await getPrediction(30.0, 70.0, 50.0);
  //       console.log("Prediction result:", result);
  //       setPrediction(result.message);
  //     } catch (error) {
  //       console.error("Prediction fetch error:", error);
  //       setPrediction("Prediction error.");
  //     }
  //   }
  //   fetchPrediction();
  // }, []);

  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg:white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (4A)</h1>
          <div>
            {/* <p className="text-green-700 font-bold">{prediction}</p> */}
            {/* <PredictionChart /> */}
          </div>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        {/* <PredictionImageChart /> */}
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default StudentPage;
