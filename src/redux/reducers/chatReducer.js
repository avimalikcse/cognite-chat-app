import { LOAD_CHATS, UPDATE_CHAT } from '../actions/action-types';
const INITIAL_STATE = {
    isContactSelected: false,
    contactUserName: '',
    chats: []
};

const chatReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case LOAD_CHATS:
            const { chats, contactUserName } = action.payload
            return {
                ...state,
                chats,
                contactUserName,
                isContactSelected: true,

            };

        case UPDATE_CHAT:
            return {
                ...state,
                chats:action.payload.contactChats
            };


        default: return state;

    }

};

export default chatReducer;