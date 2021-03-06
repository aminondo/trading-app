import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import './App.css';
import { ActiveContextProvider } from "./context/StocksContext"
import { AssetsContextProvider } from "./context/AssetsContext";
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AssetsContextProvider>
      <ActiveContextProvider>
        <App />
      </ActiveContextProvider>
    </AssetsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
