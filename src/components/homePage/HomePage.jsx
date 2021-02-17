import React from 'react';
import { Grid, Modal, Button, Header, Input } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import ContactList from '../contactList/ContactList'
import ChatWindow from '../chatWindow/ChatWindow'
import { loginUser } from '../../redux/actions/userAction'
import style from './hello-world.css'

/**
 * Main Component of the App, contains two Component,
 * Component ContactList Render left side Contact list 
 * ChatWindow Render Right side Chat Window
 * 
 * @param {*} props 
 */


const HomePage = (props) => {
    const dispatch = useDispatch()
    const { isLoggedIn, loginError } = useSelector(state => state.user)
    const [userName, setuserName] = React.useState('')

    const handleInputChange = (event) => {
        setuserName(event.target.value)
    }

    const dispatchLoginUser = () => dispatch(loginUser(userName))
    return (
        <Grid columns={2} divided className="myGrid">
            <Grid.Row>
                {/* Left Side Contact list */}
                <Grid.Column computer={5} mobile={16} className='myContact'>
                    <ContactList></ContactList>
                </Grid.Column>
                {/* Right Side Chat Window  */}
                <Grid.Column width={11} only='computer' className='myChat' textAlign='center'>
                    <ChatWindow></ChatWindow>
                </Grid.Column>
                {/* @todo - Handle Mobile Screen */}
            </Grid.Row>


            {/* this should goes to a separate component*/}
            <Modal open={!isLoggedIn}>
                <Modal.Header>You need to Login First</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Input label='User Name' value={userName} error={loginError} onChange={handleInputChange}></Input>
                        <p> Hint : use foo or bar</p>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        content="Login"
                        labelPosition='right'
                        icon='checkmark'
                        positive
                        onClick={dispatchLoginUser}
                    />
                </Modal.Actions>
            </Modal>
        </Grid>
    )
}

export default HomePage;
