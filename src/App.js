import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className="header d-flex align-items-center justify-content-center">
        <p className="text-center">I Hear You</p>
      </div>
      <div className="home">
        <Link to="sl-txt-choose">
          <div className="sl text-center">
            <div className="icon-container d-flex align-items justify-content-center">
              <div className="icon d-flex align-items justify-content-center">
                <div className="icons">
                  <img src="img/wave.svg" alt="icon of hand waving"/>
                </div>
              </div>
            </div>
            <br/>
            <h3>Sign Language <span className="fa fa-long-arrow-right"></span> Text</h3>
          </div>
        </Link>
        <Link to="txt-sl-choose">
          <div className="txt text-center">
            <div className="icon-container d-flex align-items justify-content-center">
              <div className="icon d-flex align-items justify-content-center">
                <div className="icons">
                  <img src="img/text.svg" alt="icon of speech bubble"/>
                </div>
              </div>
            </div>
            <br/>
            <h3>Text <span className="fa fa-long-arrow-right"></span> Sign Language</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default App;
