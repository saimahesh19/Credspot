import React, { useState } from 'react';
import bg7 from './images/bbb.mp4'
import './style.css'
import axios from 'axios';

const MalUrl = () => {
  const [result, setResult] = useState('');
  const [label, setLabel] = useState('');

  const handleClassification = async (url) => {
    try {
      const response = await axios.post('http://localhost:5000/classify', { url: url });
      setResult(response.data.result);
      setLabel(response.data.label);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userUrl = event.target.url.value;
    handleClassification(userUrl);
  };

  return (
    <div className='mal'>
      <video src={bg7} autoPlay loop muted />
      <b><h1 className='animated-text'>Malicious URL Detection</h1></b>
      <div className='for'>
      <form onSubmit={handleSubmit}>
        <input type="text" name="url" />
        <button type="submit">Classify</button>
      </form>
      <p>The classification result is: {result}</p>
      <p>The predicted label is: {label}</p>
      </div>
    </div>
  );
};

export default MalUrl;
