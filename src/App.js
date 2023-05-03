import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SpamMail from './components/SpamMail';
import MalUrl from './components/MalUrl';
import Ddos from './components/Ddos';
import Cont from './components/Cont'
function App() {
  return (
    <div>
      
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SpamMail" element={<SpamMail />} />
        <Route path="/MalUrl" element={<MalUrl />} />
        <Route path="/Ddos" element={<Ddos />} />
        <Route path="/Cont" element={<Cont />} />
        </Routes>
    </Router>
    
    </div>
  );
}

export default App;