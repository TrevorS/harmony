import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import App from './App';
import DocumentStyle from './utils/DocumentStyle';

import './index.css';

const ds = new DocumentStyle();
ds.setOneHundredPercentHeight();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
