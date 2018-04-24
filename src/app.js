import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './styles/styles.scss';

import LoadingPage from './components/LoadingPage';
import Game from './components/Game';
import ListOfQuiz from './components/ListOfQuiz';
import rootReducer from './reducers/rootReducer';
//
// const App = () => (
//   <Provider store={store}>
//     <BrowserRouter>
//       <Switch>
//         <Route path="/quiz" component={Game} />
//         <Route path="/" component={ListOfQuiz} />
//         <Route />
//       </Switch>
//     </BrowserRouter>
//   </Provider>
// );

// const App = () => (
//   <div className="content-container">
//     <Game />
//   </div>
// );

// const store = createStore(rootReducer);
const store = createStore(
  rootReducer,
  compose(
    // applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // For testing in browser
  )
);
const jsx = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/quiz" component={Game} />
        <Route path="/" component={ListOfQuiz} />
        <Route />
      </Switch>
    </BrowserRouter>
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
