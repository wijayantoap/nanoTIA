import postReducer from './postReducer';
import alert from './alertReducer';
import currentPage from './currentPage';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    postReducer,
    currentPage,
    alert
});

export default rootReducers;