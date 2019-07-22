import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

/* Import Components */
import App from './components/containers/App';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
