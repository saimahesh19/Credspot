import React from 'react'
import bg7 from './images/bg9.mp4'
import './style.css';

function Cont() {
    return (
        <div className='co'>
            <video src={bg7} autoPlay loop muted />
             <h1 className="wel"><b>Welcome</b> to Credspot</h1>
      <ul>
        <li className="one">A vulnerability is a hole or a weakness in the application, which can be a design flaw or an implementation bug, that <p className="fi">allows an attacker to cause harm to the stakeholders of an application.</p></li>
        <li className="two">Stakeholders include the application owner, application users, and other entities that rely on the application.</li>
        <li className="th">Credspot helps you to find some of the vulnerabilities.</li>
        <li className="fo">You can check the following here:</li>
        <ul className="cred">
          <li>SpamMail Detection</li>
          <li>Malware URL Detection</li>
          <li>Password Strength Checking</li>
        </ul>
      </ul>
        </div>
    );
}

export default Cont;