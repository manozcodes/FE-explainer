import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// METHOD - 1 (REFERENCING current file path)
// //SAME FOLDER
// import Test from './Test';

// // ONE folder outside
// import Test2 from '../Test2';

// // TWO folders outside
// import Test3 from '../../Test3';


// METHOD -2 (REFERENCING /src)
// import Test from '/Test'
// import Test1 from '/Test1'
// import Test2 from '/Test1/Test2'

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
