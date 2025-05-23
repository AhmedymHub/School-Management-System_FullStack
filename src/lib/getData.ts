// src/lib/getData.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getStudentsWithResults() {
  const students = await prisma.student.findMany({
    include: {
      results: true,
      parent: true,
      class: true,
      grade: true,
    },
  });

  console.log(JSON.stringify(students, null, 2));
}

getStudentsWithResults()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
