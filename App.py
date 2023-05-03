
from flask import Flask, request, jsonify
import numpy as np 
import pandas as pd 
from sklearn.naive_bayes import MultinomialNB
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.pipeline import Pipeline
from sklearn.model_selection import train_test_split
from flask_cors import CORS
import urllib.parse
import re
from sklearn.metrics import accuracy_score
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score, classification_report
from password_strength import pass_strength_blueprint
app = Flask(__name__)
CORS(app)
# ***************************************************************** spam message detection************************
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    message = data['message']
    
    # load data
    data=pd.read_csv(r"C:\\Users\SAI MAHESH\Downloads\spam.csv")
    data['Spam'] = data['Category'].apply(lambda x:1 if x=='spam' else 0)
    
    # split data
    X_train,X_test,y_train,y_test=train_test_split(data.Message,data.Spam,test_size=0.10)
    
    # train model
    clf=Pipeline([
        ('vectorizer',CountVectorizer()),
        ('nb',MultinomialNB())
    ])
    clf.fit(X_train,y_train)
    
    # predict on user input
    prediction = clf.predict([message])[0]
    result = 'spam' if prediction == 1 else 'ham'
    print(result)
    # return JSON response
    return jsonify({'result': result})

# app.run() 
df = pd.read_csv(r"C:\\Users\SAI MAHESH\Desktop\\files\semisters\sem4\\machine learning in cyber security\\urldata.csv")

# http://boasecg7.beget.tech/cgi-bin/index/pcg/free/frebox158418/freemobs/
# http://ecct-it.com/docmmmnn/aptgd/index.php
#        *************************************malurl*************************************************
def predict2(url):
    url = urllib.parse.unquote(url)
    url = url.lower()
    # Remove http and www
    url = re.sub(r'^https?://(?:www\.)?', '', url)
    # Remove trailing slash
    url = re.sub(r'/$', '', url)
    return url

# Preprocess the URLs in the dataset
df['url'] = df['url'].apply(predict2)

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(df['url'], df['label'], test_size=0.2)

# Define the pipeline
pipeline = Pipeline([
    ('vect', CountVectorizer()),
    ('tfidf', TfidfTransformer()),
    ('clf', LogisticRegression())
])

# Train the pipeline
pipeline.fit(X_train, y_train)

# Create Flask app


# Define endpoint to handle POST request for classification
@app.route('/classify', methods=['POST'])
def classify():
    try:
        # Get user input URL from request data
        url = request.json['url']
        # Preprocess the URL
        url = predict2(url)
        # Predict the label for the user input URL
        label = pipeline.predict([url])[0]
        # Output the result and label
        result = "False Positive" if label == 0 else "True Positive"
        return jsonify({'result': result, 'label': label})
    except Exception as e:
        return jsonify({'error': str(e)})

# ********************************


# (************************************password strenght checkert*********************************)




app.register_blueprint(pass_strength_blueprint)


if __name__ == '__main__':
    app.run(debug=True)