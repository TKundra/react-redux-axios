import { createStore, applyMiddleware } from 'redux';
import { userReducer } from './reducer/userReducer';
import thunk from 'redux-thunk';

const store = createStore(userReducer, applyMiddleware(thunk));
export default store;