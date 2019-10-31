import postReducer from './postReducer';
import currentPage from './currentPage';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    postReducer,
    currentPage
});

export default rootReducers;