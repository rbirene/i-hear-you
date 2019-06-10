import React from 'react';
import { Link } from 'react-router-dom';

function TxtSl() {

  return (
    <div>
      <div className="header d-flex align-items-center justify-content-center">
        <div className="back"><Link to="txt-sl-choose"><span className="fa fa-chevron-left"></span></Link></div><p className="text-center">I Hear You</p>
      </div>
      <div className="txt-sl">
        <div className="textbox">
          <textarea  onClick={changeLoader} placeholder="Type something here (e.g. 'okay')..."></textarea>
          <button id="translateBtn" type="button" onClick={changeImg} className="btn">Go</button>
        </div>
        <br/><br/>
        <div id="translation" className="d-flex align-items-center justify-content-center">

        </div>
      </div>
    </div>
  );

}

function changeLoader() {
  const translation = document.getElementById("translation");
  while (translation.firstChild) {
    translation.removeChild(translation.firstChild);
  }
  if (translation.children.length === 0) {
    var loadingDots = document.createElement("div");
    loadingDots.className = "loading-dots";
    translation.appendChild(loadingDots);
    var loadingDot = document.createElement("span");
    loadingDot.className = "loading-dot";
    loadingDots.appendChild(loadingDot.cloneNode(true));
    loadingDots.appendChild(loadingDot.cloneNode(true));
    loadingDots.appendChild(loadingDot.cloneNode(true));
  }
}

function changeImg() {
  const translation = document.getElementById("translation");
  while (translation.firstChild) {
    translation.removeChild(translation.firstChild);
  }
  if (translation.children.length === 0) {
    var img = document.createElement("img");
    img.src = "img/hand.svg";
    img.alt = "american sign language of 'okay'";
    translation.appendChild(img);
  }
}

export default TxtSl;
