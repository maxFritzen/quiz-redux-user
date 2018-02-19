import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './styles/styles.scss';

import LoadingPage from './components/LoadingPage';
import Game from './components/Game';
import rootReducer from './reducers/rootReducer';


const App = () => (
  <div className="content-container">
    <Game />
  </div>
);

const store = createStore(rootReducer);
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

let hasRendered = false;
//console.log('hasrender', hasRendered);
const renderApp =  () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  //  console.log('hasrender', hasRendered);
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));
renderApp();
