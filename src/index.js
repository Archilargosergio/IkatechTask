import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Route/App';
import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import store from './Utils/store/indexStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* < Provider store={store}>
    </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
