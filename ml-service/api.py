from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
from fastapi.responses import StreamingResponse
import matplotlib.pyplot as plt
import io

app = FastAPI()

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend dev origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = joblib.load("student_success_model.pkl")

class StudentInput(BaseModel):
    score: float
    present: float
    level: int

# Store logs in memory
prediction_logs = []

@app.get("/")
def read_root():
    return {"message": "Welcome to the Student Success Prediction API!"}

@app.post("/predict")
def predict(input: StudentInput):
    data = [[input.score, input.present, input.level]]
    prediction = model.predict(data)[0]
    result = {
        "score": input.score,
        "present": input.present,
        "level": input.level,
        "prediction": int(prediction),
        "message": "This student is likely to succeed." if prediction == 1 else "This student might struggle."
    }
    prediction_logs.append(result)
    return result

@app.get("/predictions")
def get_predictions():
    return prediction_logs


@app.get("/chart")
def get_chart():
    if not prediction_logs:
        return {"error": "No prediction data to visualize."}

    scores = [entry["score"] for entry in prediction_logs]
    predictions = [entry["prediction"] for entry in prediction_logs]

    plt.figure(figsize=(10, 5))
    plt.plot(scores, label="Scores", marker="o")
    plt.plot(predictions, label="Predictions", marker="x")
    plt.title("Scores vs ML Predictions")
    plt.xlabel("Entry Index")
    plt.ylabel("Value")
    plt.legend()
    plt.grid(True)

    buf = io.BytesIO()
    plt.savefig(buf, format="png")
    plt.close()
    buf.seek(0)
    
    return StreamingResponse(buf, media_type="image/png")

