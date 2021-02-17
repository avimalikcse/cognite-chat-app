import React, { Component } from 'react';
import { Grid, Input, Segment, Icon, List, Label, Message } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { sendMessage } from '../../redux/actions/chatAction'


/**
 * Right Side Chat Window of the APP
 * 
 * @param {any} props 
 */

const ChatWindow = (props) => {
    const dispatch = useDispatch()
    const { isContactSelected, chats, contactUserName } = useSelector(state => state.chats)
    const dispatchContactSelection = (userName) => dispatch(loadContactChats(userName))
    const [message, setMessage] = React.useState('')

    const handleInputChange = (event) => {
        setMessage(event.target.value)
    }
    const dispatSendMessage = () => dispatch(sendMessage(contactUserName, message), setMessage(''))
    return (isContactSelected ? <List>
        <List.Item>
            <List.Content>
                <List.Header>
                    <Segment color='teal' textAlign='left'> {contactUserName} <br /> Last Seen : Today </Segment> </List.Header>
            </List.Content>
        </List.Item>
        {chats.map((chat, key) => {
            const isContactMessage = chat.sender == contactUserName // so that can identify the sender of message 
            return (
                <List.Item >
                    <List.Icon size='large' verticalAlign='middle'><Label circular color='grey'>{chat.sender[0]}</Label> </List.Icon>
                    <List.Content>
                        <List.Description><Message className={`${isContactMessage ? 'contactText' : 'myText'}`}>{chat.message}</Message></List.Description>
                    </List.Content>
                </List.Item>
            )
        })}


        <List.Item className='sendButton'>
            <List.Content>
                <List.Description><Input fluid
                    icon={<span onClick={dispatSendMessage}><Icon name='send' inverted circular link /></span>}
                    placeholder='Start typing...'
                    value={message}
                    onChange={handleInputChange}
                /></List.Description>
            </List.Content>
        </List.Item>
    </List> : <Message info size='massive'>Please Select a contact from left list
    to See or start a new chat
    </Message>)
}


export default ChatWindow
