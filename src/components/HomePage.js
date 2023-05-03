import React from 'react';                                                            
import { Link} from 'react-router-dom';                                                       
import spammsg from './images/spam.jpg';                                                 
import malurl from './images/malurl.png';                                                             
import ddos from './images/ddos.jpg';
import logo1 from './images/logo1.png';
import bg1 from './images/bg3.mp4'
import ado from './images/Hacker.mp3'
import './style.css'                                                         


function HomePage(){                                                                            
  return (  
    <div  className="back">
      <video src={bg1} autoPlay loop muted />
      <audio src={ado} autoPlay />
      {/* <img background={bg2} /> */}
      <div className="content">
      <div className="logos">
      <Link to="/Cont"><img src={logo1} /> </Link>
      </div><br></br><br></br>
      <h1>Our Service:</h1>
     
      <div className='container'>
        <div className='card'>
        <Link to="/SpamMail"><img className="asd" src={spammsg} width="25%"/></Link> 
        </div>
        <div className='card'>                      
        <Link to="/MalUrl"><img className="asd1" src={malurl} width="25%"/></Link>
        </div> 
        <div className='card'>
        <Link to="/Ddos"><img className="asd2" src={ddos} width="25%"/></Link>
        </div>
      </div>
      <h3></h3>
      </div>
    </div>
  );
  }

export default HomePage;                         



