# 🎓 School Management System – Full-Stack Web Application

A modern full-stack **School Management System** built with **Next.js**, **Prisma**, **PostgreSQL**, and **FastAPI**. The platform supports multiple user roles and includes machine learning features to enhance student performance analysis and school operations.

## 🔗 Live Demo

👉 [View Live Project](http://localhost:3000/) <!-- Replace with actual deployed URL -->

## 🚀 Features

- 🔐 Role-Based Authentication: Admin, Teacher, Student, Parent
- 📅 Interactive Calendar
- 📌 Kanban Task Board for Assignments and Projects
- 📝 Rich Text Editor (WYSIWYG)
- 🎨 Light/Dark Theme Toggle
- 📈 7 Types of Dynamic Charts
- 🎯 Machine Learning Integration:
  - ✅ Student Success Prediction using academic data
- 🖼️ Modern UI built with Tailwind CSS and TypeScript

## 🧠 Machine Learning Features

Powered by **Python** and **FastAPI**, the machine learning service provides:

- 🎓 **Student Success Prediction**  
  Predicts the likelihood of student academic success based on:
  - Attendance
  - Grades
  - Class performance
  - Behavioral data

**Input**: CSV files (`Student.csv`, `Result.csv`, `Attendance.csv`, etc.)  
**Output**: Predictive labels (e.g., "Likely to succeed", "At risk")

Service runs in the `/ml-service` directory and connects to the frontend dashboard for live insights.

## 🛠️ Tech Stack

**Frontend**:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Recharts](https://recharts.org/)

**Backend**:
- [FastAPI](https://fastapi.tiangolo.com/) (ML API)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)

**Machine Learning**:
- [Pandas](https://pandas.pydata.org/)
- [Scikit-learn](https://scikit-learn.org/)
- [FastAPI](https://fastapi.tiangolo.com/)

## 📁 Project Structure

