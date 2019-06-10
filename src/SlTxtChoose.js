import React from 'react';
import { Link } from 'react-router-dom';

function SlTxtChoose() {
  return (
    <div>
      <div className="header d-flex align-items-center justify-content-center">
        <div className="back"><Link to="/"><span className="fa fa-chevron-left"></span></Link></div><p className="text-center">I Hear You</p>
      </div>
      <div className="sl-txt-choose">
        <h3 className="text-center">Select Your Language</h3>
        <br/><br/>
        <p><img className="icons" src="img/wave.svg" alt="icon of hand waving"/> From:</p>
        <select className="form-control">
          <option>British Sign Language</option>
        </select>
        <br/>
        <p><img className="icons" src="img/text.svg" alt="icon of speech bubble"/> To:</p>
        <select className="form-control">
          <option>English</option>
        </select>
        <br/><br/>
        <Link to="sl-txt" className="d-flex justify-content-center"><button type="button" className="btn btn-success">Go!</button></Link>
      </div>
    </div>
  );
}

export default SlTxtChoose;
