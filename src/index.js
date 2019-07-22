import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

/* Import Components */
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
