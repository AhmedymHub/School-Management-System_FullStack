const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const path = require("path");

const prisma = new PrismaClient();

async function exportAllModels() {
  const students = await prisma.student.findMany();
  const results = await prisma.result.findMany();
  const attendance = await prisma.attendance.findMany();
  const grades = await prisma.grade.findMany();
  const lessons = await prisma.lesson.findMany();
  const classes = await prisma.class.findMany();

  // Prepare CSV content here combining data as you want
  // Example: just output student info

  const header = "id,name,supervisorId,gradeId\n";
  const rows = classes
    .map((s) => `${s.id},${s.name},${s.supervisorId},${s.gradeId}}`)
    .join("\n");

  const csvContent = header + rows;

  fs.writeFileSync(path.join(__dirname, "Class.csv"), csvContent);

  console.log("CSV exported to Class.csv");
}

exportAllModels()
  .catch((e) => {
    console.error(e);
  })
  .finally(() => {
    prisma.$disconnect();
  });
