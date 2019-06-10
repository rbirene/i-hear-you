import React from 'react';
import { Link } from 'react-router-dom';

function TxtSl() {

  return (
    <div>
      <div className="header d-flex align-items-center justify-content-center">
        <div className="back"><Link to="txt-sl-choose"><span className="fa fa-chevron-left"></span></Link></div><p className="text-center">I Hear You</p>
      </div>
      <div className="txt-sl">
        <textarea>Okay.</textarea>
        <img src="img/hand.svg" alt="image of american sign language for okay"/>
      </div>
    </div>
  );

}

export default TxtSl;
