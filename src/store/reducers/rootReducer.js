import {combineReducers} from 'redux';
import authReducer from './authReducer';
import bookReducer from './bookReducers'
const rootReducer = combineReducers({
    auth: authReducer,
    books: bookReducer
})

export default rootReducer;