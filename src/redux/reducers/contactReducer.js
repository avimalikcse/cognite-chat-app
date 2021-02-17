import { LOAD_CONTACT } from '../actions/action-types';
const INITIAL_STATE = {
    contacts: []
};

const contactReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_CONTACT:
            return {
                ...state, contacts: action.payload.contacts.contacts,
            };
        default: return state;
    }
};

export default contactReducer;