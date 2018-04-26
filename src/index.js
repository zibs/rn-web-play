import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppRegistry } from 'react-native';

import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('root')
});
registerServiceWorker();
