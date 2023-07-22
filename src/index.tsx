
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);