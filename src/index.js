import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Home';
import Router from "./Components/Router"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div>
    <h1>Index Principal</h1>
      <div>
        <ul>
            <li><a href='/'>Home</a></li>
        </ul>
        <ul>
            <li><a href='/doctores'>Doctores</a></li>
        </ul>
      </div>
      <div>
        <Router/>
      </div>
 </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
