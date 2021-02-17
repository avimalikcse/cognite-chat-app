import { LOGIN_USER, USER_ERROR } from './action-types';
import { loadContacts } from './contactAction'
export const loginUser = (userName) => {
    return dispatch => {
        let users;
        users = localStorage.getItem('users')
        if (!users) { // for the first time only
            users = JSON.stringify([{ userName: 'foo' }, { userName: 'bar' }])
            localStorage.setItem('users', users)
        }
        const user = JSON.parse(users).find(user => user.userName === userName)
        if (user) {
            dispatch(loadContacts(user.userName))
            dispatch({
                type: LOGIN_USER,
                payload: { user }
            });


        } else {
            dispatch({
                type: USER_ERROR,
            });
        }
    }
};
