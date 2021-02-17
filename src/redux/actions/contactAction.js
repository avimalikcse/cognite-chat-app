import { LOAD_CONTACT, LOAD_CHATS } from './action-types';
export const loadContacts = (userName) => {
    return dispatch => {
        let contactsFromDB;
        contactsFromDB = localStorage.getItem('contacts') // get list of Contacts, in Future will be calling a Server API instead of local storage 
        if (!contactsFromDB) { // for the first time only
            contactsFromDB = JSON.stringify([{ userName: 'foo', contacts: [{ userName: 'bar' }] }, { userName: 'bar', contacts: [{ userName: 'foo' }] }])
            localStorage.setItem('contacts', contactsFromDB) // so that later i come to app, it should be there
        }
        const contacts = JSON.parse(contactsFromDB).find(user => user.userName === userName)
        if (contacts) {
            return dispatch({
                type: LOAD_CONTACT,
                payload: { contacts }
            });

        }
    }
};

export const loadContactChats = (contactUserName) => {
    return (dispatch, getState) => {
        const loggedUser = getState().user.user
        let contactChatDB;
        contactChatDB = localStorage.getItem('chats') // in future , API will be called to get chats
        if (!contactChatDB) { // for the first time only 
            contactChatDB = JSON.stringify([{ sender: loggedUser.userName, receiver: contactUserName, message: 'Hello', timestamp: Date.now() }])
            localStorage.setItem('chats', contactChatDB)
        }
        const contactChats = JSON.parse(contactChatDB).filter(chat => {
            return (
                (chat.sender === loggedUser.userName && chat.receiver === contactUserName) ||
                (chat.sender === contactUserName && chat.receiver === loggedUser.userName)
            )
        }).sort((x, y) => x.timestamp - y.timestamp) // in future, this would be done on server using DB queries 
        return dispatch({ type: LOAD_CHATS, payload: { chats: contactChats, contactUserName } });
    }
};
