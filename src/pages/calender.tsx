// import React, { useState } from "react";
// import {
//   ScheduleComponent,
//   ViewsDirective,
//   ViewDirective,
//   Day,
//   Week,
//   WorkWeek,
//   Month,
//   Agenda,
//   Inject,
//   Resize,
//   DragAndDrop,
//   ScheduleComponent as Schedule,
//   DragEventArgs,
// } from "@syncfusion/ej2-react-schedule";
// import {
//   DatePickerComponent,
//   ChangeEventArgs,
// } from "@syncfusion/ej2-react-calendars";

// import { scheduleData } from "../data/dummy";
// import Header from "../components/Header";

// const PropertyPane = ({ children }: { children: React.ReactNode }) => (
//   <div className="mt-5">{children}</div>
// );

// const Calendar = () => {
//   const [scheduleObj, setScheduleObj] = useState<Schedule | null>(null);

//   const change = (args: ChangeEventArgs) => {
//     if (scheduleObj) {
//       scheduleObj.selectedDate = args.value as Date;
//       scheduleObj.dataBind();
//     }
//   };

//   const onDragStart = (arg: DragEventArgs) => {
//     if (arg.navigation) {
//       arg.navigation.enable = true;
//     }
//   };

//   return (
//     <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
//       <Header category="App" title="Calendar" />
//       <ScheduleComponent
//         height="650px"
//         ref={(schedule: Schedule | null) => setScheduleObj(schedule)}
//         selectedDate={new Date(2021, 0, 10)}
//         eventSettings={{ dataSource: scheduleData }}
//         dragStart={onDragStart as (arg: DragEventArgs) => void}
//       >
//         <ViewsDirective>
//           {["Day", "Week", "WorkWeek", "Month", "Agenda"].map(
//             (item: string) => (
//               <ViewDirective
//                 key={item}
//                 option={
//                   item as "Day" | "Week" | "WorkWeek" | "Month" | "Agenda"
//                 }
//               />
//             )
//           )}
//         </ViewsDirective>
//         <Inject
//           services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
//         />
//       </ScheduleComponent>
//       <PropertyPane>
//         <table style={{ width: "100%", background: "white" }}>
//           <tbody>
//             <tr style={{ height: "50px" }}>
//               <td style={{ width: "100%" }}>
//                 <DatePickerComponent
//                   value={new Date(2021, 0, 10)}
//                   showClearButton={false}
//                   placeholder="Current Date"
//                   floatLabelType="Always"
//                   change={change}
//                 />

//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </PropertyPane>
//     </div>
//   );
// };

// export default Calendar;
