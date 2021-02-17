import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { hot } from 'react-hot-loader/root';
import HomePage from './components/homePage/HomePage';
import { Header} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
    <BrowserRouter>
    {/* <Header textAlign='center' color='orange'>My Chat App</Header> */}
    <Switch>
          <Route path="/" component={HomePage}/>
        </Switch>
    </BrowserRouter>
    )
  }
}

export default hot(App);
