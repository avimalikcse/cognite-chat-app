
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import contactReducer from './contactReducer'
import chatReducer from './chatReducer'

const rootReducer = combineReducers({
    user: userReducer,
    contacts: contactReducer,
    chats: chatReducer
});

export default rootReducer;