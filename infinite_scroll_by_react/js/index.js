
import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const { serverInfo } = window;

render(
    <BrowserRouter>
        <App serverInfo={serverInfo} />
    </BrowserRouter>,
    document.getElementById('App')
);