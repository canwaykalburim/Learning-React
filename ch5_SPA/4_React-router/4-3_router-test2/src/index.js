import React from 'react';
import ReactDOM from 'react-dom';
import HelloApp2 from './HelloApp2.js';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(<HelloApp2 />, document.getElementById('root'));

serviceWorker.unregister();
