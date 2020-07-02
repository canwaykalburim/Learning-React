import React from 'react';
import ReactDOM from 'react-dom';
import CustomerApp from './CustomerApp';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(<CustomerApp />, document.getElementById('root'));

serviceWorker.unregister();
