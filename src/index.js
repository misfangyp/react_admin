import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './redux/store'

createRoot(document.getElementById('root')).render(
    <Router>
        <Provider store={store}><App /></Provider>
    </Router>)
reportWebVitals();
