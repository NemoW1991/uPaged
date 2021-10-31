import {createStore, applyMiddleware} from 'redux';
import ThunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(
  rootReducer,

  composeWithDevTools(applyMiddleware(ThunkMiddleware))
);

export type AppState = ReturnType<typeof rootReducer>
export default store;