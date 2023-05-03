from flask import Flask, request, jsonify, Blueprint
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import LabelEncoder
import pandas as pd
import numpy as np

pass_strength_blueprint = Blueprint('check_pass_strength', __name__)

# Load the dataset
df = pd.read_csv(r"C:\\Users\SAI MAHESH\Downloads\data.csv")
# "C:\Users\SAI MAHESH\Downloads\data.csv"
# Drop rows with NaN values in the "password" column
df = df.dropna(subset=['password'])

# Perform label encoding on the 'strength' attribute
label_encoder = LabelEncoder()
df['strength'] = label_encoder.fit_transform(df['strength'])
# Map the label encoder classes to strength labels
strength_labels = {0: "Weak", 1: "Medium", 2: "Strong"}

# Create a CountVectorizer to convert passwords into numerical features
vectorizer = CountVectorizer(analyzer='char')
X = vectorizer.fit_transform(df['password'])
y = df['strength']

# Create and train a Logistic Regression model
model = LogisticRegression(max_iter=20)
model.fit(X, y)

# Define an API endpoint for password strength prediction
@pass_strength_blueprint.route('/api/predict_strength', methods=['POST'])
def predict_strength():
    user_password = request.json['password']
    user_password_feature = vectorizer.transform([user_password])
    prediction = model.predict(user_password_feature)
    predicted_strength = strength_labels[prediction[0]]
    return jsonify({'predicted_strength': predicted_strength})




