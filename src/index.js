import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import "./assets/css/index.css";
import "./assets/css/animate.css";




ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,

    document.getElementById('root')
);

