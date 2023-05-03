import React, { useState } from 'react';
import bg7 from './images/bg9.mp4'
import ha from './images/bg10.jpg'
import './style.css'
import axios from "axios";
function SpamMail() {
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', { message});
      setResult(response.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='sp'>
      <video src={bg7} autoPlay loop muted />
      <h1>SpamMail Detection</h1>
      <div className='joe'>
        <img className='hac' src={ha} />
      <form className='fo' onSubmit={handleSubmit}>
        <label>
          Message:
          <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <p>Result: {result}</p>
        <button type="submit">Predict</button>
        
      </form>
      </div>
     
    </div>
  );
}

export default SpamMail;
