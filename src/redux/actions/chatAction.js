import { UPDATE_CHAT } from './action-types';
import { loadContacts } from './contactAction'
export const sendMessage = (to, message) => {
    return (dispatch, getState) => {
        const loggedUser = getState().user.user // get the logged in user details
        const contactChatDB = localStorage.getItem('chats') // get previous message
        const contactChats = JSON.parse(contactChatDB)
        contactChats.push({ sender: loggedUser.userName, receiver: to, message: message, timestamp: Date.now() }) // push one record to chats
        dispatch({
            type: UPDATE_CHAT,
            payload: { contactChats }
        })
        localStorage.setItem('chats', JSON.stringify(contactChats)) // this would be the place where we will be calling the API
    }
};
