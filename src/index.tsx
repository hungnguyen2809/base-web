import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import reportWebVitals from './reportWebVitals';

const checkContainer = (element: HTMLElement | null): HTMLElement => {
  if (!element) {
    throw new Error('Can not get element "div" by id "root"');
  }
  return element;
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(checkContainer(container));

root.render(
  <React.Fragment>
    <App />
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
