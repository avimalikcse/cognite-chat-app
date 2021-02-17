import React, { Component } from 'react';
import { Grid, Image, Card, Button, List, Header, Checkbox, Label } from 'semantic-ui-react'
import { useSelector,useDispatch } from 'react-redux'
import {loadContactChats} from '../../redux/actions/contactAction'

/**
 * Left Side Section of APP
 * @param {any} props 
 */

const ContactList = (props) => {
    const dispatch = useDispatch()
    const { contacts } = useSelector(state => state.contacts)
    const dispatchContactSelection = (userName) => dispatch(loadContactChats(userName))
    return (<List divided>
        <List.Item className='tCenter'>
            <List.Content textAlign='center'>
                <List.Header>
                    Welcome User</List.Header>
                <List.Description>Your Contacts</List.Description>
            </List.Content>
        </List.Item>
        {/* loops in all contact */}
        {contacts.map((contact, key) => {
            return (
                <List.Item onClick={()=>dispatchContactSelection(contact.userName)}>
                    <List.Icon size='large' verticalAlign='middle'><Label circular color='grey'> A</Label> </List.Icon>
                    <List.Content>
                        <List.Header >
                            {contact.userName}</List.Header>
                        <List.Description>last Message</List.Description>
                    </List.Content>
                </List.Item>
            )
        })}

    </List>)
}


export default ContactList
