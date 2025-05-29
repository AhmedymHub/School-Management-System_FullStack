// import { useEffect, useState } from "react";
// import { getPrediction } from "@/lib/mlApi";
import EventCalendar from "@/components/EventCalendar";
import Announcements from "@/components/Announcements";
import BigCalendarContainer from "@/components/BigCalendarContainer";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";
// import PredictionChart from "@/components/PredictionCharts";
// import PredictionImageChart from "@/components/PredictionImageChart";

const StudentPage = async () => {
  const { userId } = await auth();

  const classItem = await prisma.class.findMany({
    where: {
      students: { some: { id: userId! } },
    },
  });

  console.log("Class Item:", classItem);

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
          {classItem.length > 0 ? (
            <BigCalendarContainer type="classId" id={classItem[0].id} />
          ) : (
            <p className="text-red-600 font-semibold items-center justify-center">
              No class assigned yet.
            </p>
          )}
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
