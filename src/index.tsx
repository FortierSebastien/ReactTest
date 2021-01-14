import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import LangState from './context/lang';




ReactDOM.render(
    <React.StrictMode>
        <LangState>
            <App />
        </LangState>
        
    </React.StrictMode>,
    document.getElementById('root'));


