import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ClubNav from './components/parts/ClubNav/index';
import MainNav from './components/parts/MainNav/index';
import Footer from './components/parts/Footer/index';
import './scss/main.scss'
// import Bootsttrap from 'bootstrap'

ReactDOM.render(
  <React.StrictMode>
    <ClubNav />
    <MainNav />
    <App />
    <Footer id="main-footer"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
