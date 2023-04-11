import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //App.js파일로부터 App이라는 함수를 import 한 것임. 
                        //이 파일은 보통 안건드림. 
                        //수정한다 하더라도 1행 2행은 건드리지 않고, App부터 수정
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
