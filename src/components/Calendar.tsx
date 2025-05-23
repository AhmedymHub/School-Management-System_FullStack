// components/Calendar.tsx
import React, { useState } from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
  ScheduleComponent as Schedule,
  DragEventArgs,
} from "@syncfusion/ej2-react-schedule";
import {
  DatePickerComponent,
  ChangeEventArgs,
} from "@syncfusion/ej2-react-calendars";

// Sample data for events
const scheduleData = [
  {
    Id: 1,
    Subject: "Math Exam",
    StartTime: new Date(2025, 4, 10, 9, 0),
    EndTime: new Date(2025, 4, 10, 11, 0),
  },
  {
    Id: 2,
    Subject: "Science Project Due",
    StartTime: new Date(2025, 4, 12, 10, 0),
    EndTime: new Date(2025, 4, 12, 12, 0),
  },
  {
    Id: 3,
    Subject: "Parent-Teacher Meeting",
    StartTime: new Date(2025, 4, 15, 14, 0),
    EndTime: new Date(2025, 4, 15, 16, 0),
  },
];

const PropertyPane = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-5">{children}</div>
);

const Calendar = () => {
  const [scheduleObj, setScheduleObj] = useState<Schedule | null>(null);

  const change = (args: ChangeEventArgs) => {
    if (scheduleObj) {
      scheduleObj.selectedDate = args.value as Date;
      scheduleObj.dataBind();
    }
  };

  const onDragStart = (arg: DragEventArgs) => {
    if (arg.navigation) {
      arg.navigation.enable = true;
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl shadow-lg">
      <h1 className="text-2xl font-semibold mb-5">School Calendar</h1>
      <ScheduleComponent
        height="650px"
        ref={(schedule: Schedule | null) => setScheduleObj(schedule)}
        selectedDate={new Date()}
        eventSettings={{ dataSource: scheduleData }}
        dragStart={onDragStart as (arg: DragEventArgs) => void}
      >
        <ViewsDirective>
          {["Day", "Week", "WorkWeek", "Month", "Agenda"].map(
            (item: string) => (
              <ViewDirective
                key={item}
                option={
                  item as "Day" | "Week" | "WorkWeek" | "Month" | "Agenda"
                }
              />
            )
          )}
        </ViewsDirective>
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>

      <PropertyPane>
        <table style={{ width: "100%", background: "white" }}>
          <tbody>
            <tr style={{ height: "50px" }}>
              <td style={{ width: "100%" }}>
                <DatePickerComponent
                  value={new Date()}
                  showClearButton={false}
                  placeholder="Select Date"
                  floatLabelType="Always"
                  change={change}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </PropertyPane>
    </div>
  );
};

export default Calendar;
