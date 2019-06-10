import React from 'react';
import { Link } from 'react-router-dom';

function TxtSlChoose() {
  return (
    <div>
      <div className="header d-flex align-items-center justify-content-center">
        <div className="back"><Link to="/"><span className="fa fa-chevron-left"></span></Link></div><p className="text-center">I Hear You</p>
      </div>
      <div className="txt-sl-choose">
        <div className="illustration-container">
          <img className="illustration" src="img/illustration-learn.svg" alt="illustration of someone being live-translated"/>
        </div>
        <br/>
        <div className="choose-container">
          <h3 className="text-center">Select Your Language</h3>
          <br/>
          <p><img className="icons" src="img/text.svg" alt="icon of speech bubble"/> From:</p>
          <select>
            <option>English</option>
          </select>
          <br/><br/>
          <p><img className="icons" src="img/wave.svg" alt="icon of hand waving"/> To:</p>
          <select>
            <option>American Sign Language</option>
          </select>
          <br/><br/>
          <Link to="txt-sl" className="d-flex justify-content-center"><button type="button" className="btn">Go</button></Link>
        </div>
      </div>
    </div>
  );
}

export default TxtSlChoose;
