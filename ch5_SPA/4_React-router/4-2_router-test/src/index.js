import React from 'react';
import ReactDOM from 'react-dom';
import HelloApp from './HelloApp.js';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(<HelloApp />, document.getElementById('root'));

serviceWorker.unregister();
