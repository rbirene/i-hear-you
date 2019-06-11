import React from 'react';
import { Link } from 'react-router-dom';

function SlTxt() {

  return (
    <div>
      <div className="header d-flex align-items-center justify-content-center">
        <div className="back"><Link to="sl-txt-choose"><span className="fa fa-chevron-left"></span></Link></div><p className="text-center">I Hear You</p>
      </div>
      <div className="sl-txt" id="video-container">
        <div id="message">To start translating, press the record button below.</div>
        <video id="video" className="hide"></video>
        <div id="speech-bubble" className="hide">
          <h3>Hello!</h3>
        </div>
        <div id="record" onClick={record} className="start"></div>
      </div>
    </div>
  );

}

function record() {
  const message = document.getElementById("message");
  const recordBtn = document.getElementById("record");
  const speechBubble = document.getElementById("speech-bubble");
  const videoContainer = document.getElementById("video-container");
  const video = document.getElementById("video");
  //if record button is set to 'start' and show speech bubble
  if (recordBtn.classList.contains("start")){
    message.classList.add("hide");
    recordBtn.classList.remove("start");
    recordBtn.classList.add("stop");
    speechBubble.classList.remove("hide");
    loadVideo();
    video.classList.remove("hide");
    //else if record button is set to 'stop'
  } else if (recordBtn.classList.contains("stop")) {
    recordBtn.classList.remove("stop");
    recordBtn.classList.add("start");
    speechBubble.classList.add("hide");
    video.classList.add("hide");
    stopVideo();
    message.classList.remove("hide");
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
