import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
import joblib

df = pd.read_csv('final_dataset.csv')

# Clean data
df = df.dropna()
df['gradeLevel'] = df['gradeLevel'].str.replace('}', '', regex=False)
df['gradeLevel'] = pd.to_numeric(df['gradeLevel'], errors='coerce')
df = df.dropna()  # in case gradeLevel conversion added NaNs

# Features and target
X = df[['average_score', 'attendance_rate', 'gradeLevel']]
y = df['success']

# Train model
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Save model
joblib.dump(model, 'student_success_model.pkl')

print("✅ Model trained and saved as 'student_success_model.pkl'")
