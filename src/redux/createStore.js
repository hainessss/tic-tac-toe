import {
  createStore,
  compose,
} from 'redux';
import reducers from './reducers';

const finalCreateStore = compose(
  process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f,
)(createStore);

function configureStore(preloadedState) {
  const store = finalCreateStore(reducers, preloadedState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      store.replaceReducer(reducers);
    });
  }

  return store;
}

export default configureStore();
