import React from 'react';
import { Link } from 'react-router-dom';

function SlTxt() {

  return (
    <div>
      <div className="header d-flex align-items-center justify-content-center">
        <div className="back"><Link to="sl-txt-choose"><span className="fa fa-chevron-left"></span></Link></div><p className="text-center">I Hear You</p>
      </div>
      <div className="sl-txt">
        <video id="video"></video>
        <div className="speech-bubble">
          <h3>Good evening!</h3>
        </div>
        <div id="record" onClick={record} className="start">
          <img id="record-img" src="img/record.svg" alt="record and stop button"/>
        </div>
      </div>
    </div>
  );

}

function record() {
  const recordBtn = document.getElementById("record");
  const recordBtnImg = document.getElementById("record-img");
  //if record button is set to 'start'
  if (recordBtn.classList.contains("start")){
    recordBtnImg.src = "img/stop.svg";
    recordBtn.classList.remove("start");
    recordBtn.classList.add("stop");
    loadVideo();
    //else if record button is set to 'stop'
  } else if (recordBtn.classList.contains("stop")) {
    recordBtnImg.src = "img/record.svg";
    recordBtn.classList.remove("stop");
    recordBtn.classList.add("start");
    stopVideo();
  }
}

//accesses camera to load video
function loadVideo() {
  const video = document.getElementById("video");
  navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
      width: 372,
      height: 603,
      facingMode: "user"
    }
  }).then(stream => {
    video.srcObject = stream;
    video.play();
  });
};

//stops video
function stopVideo() {
  const video = document.getElementById("video");
  video.srcObject = null;
};

export default SlTxt;
