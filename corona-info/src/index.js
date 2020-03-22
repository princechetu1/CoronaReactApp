import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import reducers from './Reducers/index';
import { Provider } from 'react-redux';
import CreateStore, { applyMiddleware } from 'redux';
import ReduxSagaMiddleware from 'redux-saga';
import { watchAgeUp } from './Actions/TestActions';

const sagaMiddleware = ReduxSagaMiddleware();

const store = CreateStore(reducers,  applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchAgeUp);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
