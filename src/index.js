import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Fs from 'fs';
import Readline from 'readline';
import Google from 'googleapis';

ReactDOM.render(
	<BrowserRouter>
    	<App />
  	</BrowserRouter>,
  	document.getElementById('root')
  );

// ReactDOM.render(<App />, document.getElementById('root'));
