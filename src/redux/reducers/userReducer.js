import { LOGIN_USER ,USER_ERROR} from '../actions/action-types';
const INITIAL_STATE = {
    isLoggedIn: false,
    loginError:false,
    user:null,
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user:action.payload.user,
                isLoggedIn:true,
                loginError:false,

            };
           
            case USER_ERROR:
                return {
                    ...state,
                    loginError:true,
    
                };    
        default: return state;

    }

};

export default userReducer;