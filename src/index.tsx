import * as  React from 'react';
import * as ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// Are we in development mode?
declare var module: any;

if (module.hot) {
    // Whenever a new version of App.js is available
    module.hot.accept('./App', function () {
        // Require the new version and render it instead
        var NextApp = require('./App')
        ReactDOM.render(<App />, document.getElementById('root'))
    });
}