import { auth } from "@clerk/nextjs/server";

const role = async () => {
  const { userId, sessionClaims } = await auth();
  return {
    role: (sessionClaims?.metadata as { role?: string })?.role,
    currentUserId: userId,
  };
};

export default role;

// const currentWorkWeek = () => {
//   const today = new Date();
//   const dayOfWeek = today.getDay(); // 0 (Sun) to 6 (Sat)

//   const startOfWeek = new Date(today);

//   if (dayOfWeek === 6) {
//     // Saturday
//     startOfWeek.setDate(today.getDate() + 2);
//   } else if (dayOfWeek === 0) {
//     // Sunday
//     startOfWeek.setDate(today.getDate() + 1);
//   } else {
//     // Weekday (Mon–Fri)
//     startOfWeek.setDate(today.getDate() - (dayOfWeek - 1));
//   }

//   startOfWeek.setHours(0, 0, 0, 0);
//   return startOfWeek;
// };

const currentWorkWeek = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();

  const startOfWeek = new Date(today);

  if (dayOfWeek === 0) {
    startOfWeek.setDate(today.getDate() + 1); // If today is Sunday, the start of the week will be next Monday that means the next day.
  }

  if (dayOfWeek === 6) {
    startOfWeek.setDate(today.getDate() + 2);
  } else {
    startOfWeek.setDate(today.getDate() - (dayOfWeek - 1)); // here in any case we are going to find the Mondaye and it will be still Monday
  }
  startOfWeek.setHours(0, 0, 0, 0);

  // const endOfWeek = new Date(startOfWeek);
  // endOfWeek.setDate(startOfWeek.getDate() + 4); // Friday
  // endOfWeek.setHours(23, 59, 59, 999);

  return startOfWeek;
};

export const adjustScheduleToCurrentWeek = (
  lessons: { title: string; start: Date; end: Date }[]
): { title: string; start: Date; end: Date }[] => {
  const startOfWeek = currentWorkWeek();

  return lessons.map((lesson) => {
    const lessonDayOfWeek = lesson.start.getDay();

    const daysFromMonday = lessonDayOfWeek === 0 ? 6 : lessonDayOfWeek - 1; // Adjust Sunday to be the next day (Monday)

    const adjustedStartDate = new Date(startOfWeek);

    adjustedStartDate.setDate(startOfWeek.getDate() + daysFromMonday);
    adjustedStartDate.setHours(
      lesson.start.getHours(),
      lesson.start.getMinutes(),
      lesson.start.getSeconds()
    );

    const adjustedEndDate = new Date(adjustedStartDate);
    adjustedEndDate.setHours(
      lesson.end.getHours(),
      lesson.end.getMinutes(),
      lesson.end.getSeconds()
    );

    return {
      title: lesson.title,
      start: adjustedStartDate,
      end: adjustedEndDate,
    };
  });
};
