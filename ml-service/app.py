from fastapi import FastAPI
from pydantic import BaseModel
import joblib

app = FastAPI()
model = joblib.load("student_model.pkl")

class StudentFeatures(BaseModel):
    avg_exam_score: float
    avg_assignment_score: float
    attendance_rate: float

@app.post("/predict-student")
def predict_student(features: StudentFeatures):
    prediction = model.predict_proba([[features.avg_exam_score, features.avg_assignment_score, features.attendance_rate]])[0]
    return {"success_probability": prediction[1]}
