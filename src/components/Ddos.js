import React, { useState } from 'react';
import b2 from './images/bbbbbb.mp4'

const Ddos = () => {
  const [password, setPassword] = useState('');
  const [predictedStrength, setPredictedStrength] = useState('');

  const handleInputChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePredictStrength = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/predict_strength', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password: password })
      });

      if (!response.ok) {
        throw new Error('Failed to predict password strength');
      }

      const data = await response.json();
      setPredictedStrength(data.predicted_strength);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='pas'>
      <video src={b2} autoPlay loop muted />
      <h1>Password Strength Prediction</h1>
      <div className='df'>
      <input type="password" placeholder="Enter a password" value={password} onChange={handleInputChange} />
      <button onClick={handlePredictStrength}>Predict</button>
      {predictedStrength && (
        <div>
          <h2>Predicted Strength: {predictedStrength}</h2>
        </div>
      )}
      </div>
    </div>
  );
};

export default Ddos;




