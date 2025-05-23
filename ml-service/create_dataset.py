import pandas as pd

# Load CSVs
students = pd.read_csv('Student.csv')
results = pd.read_csv('Result.csv')
attendance = pd.read_csv('Attendance.csv')
grades = pd.read_csv('Grade.csv')
classes = pd.read_csv('Class.csv')

# Clean and calculate
avg_scores = results.groupby('studentId')['score'].mean().reset_index(name='average_score')
attendance['present'] = attendance['present'].astype(int)
attendance_rate = attendance.groupby('studentId')['present'].mean().reset_index(name='attendance_rate')

# Merge data
data = students.merge(avg_scores, left_on='id', right_on='studentId', how='left')
data = data.merge(attendance_rate, on='studentId', how='left')
data = data.merge(grades[['id', 'level']], left_on='gradeId', right_on='id', how='left', suffixes=('', '_grade'))
data = data.merge(classes[['id', 'name']], left_on='classId', right_on='id', how='left', suffixes=('', '_class'))

# Label
data['success'] = data['average_score'].apply(lambda x: 1 if x >= 50 else 0)

# Rename for clarity
data.rename(columns={'level': 'gradeLevel', 'name': 'className'}, inplace=True)

# Final dataset
final = data[['studentId', 'classId', 'className', 'gradeId', 'gradeLevel', 'average_score', 'attendance_rate', 'success']]
final.to_csv('combined_student_data.csv', index=False)
print("✅ Dataset created: combined_student_data.csv")
