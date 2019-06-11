import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import SlTxtChoose from './SlTxtChoose';
import SlTxt from './SlTxt';
import TxtSlChoose from './TxtSlChoose';
import TxtSl from './TxtSl';
import * as serviceWorker from './serviceWorker';

const routing = (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/sl-txt-choose" component={SlTxtChoose} />
      <Route path="/sl-txt" component={SlTxt} />
      <Route path="/txt-sl-choose" component={TxtSlChoose} />
    <Route path="/txt-sl" component={TxtSl} />
    </div>
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
