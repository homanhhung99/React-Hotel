import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  
import Detail_room from '../components/Detail_room';
import Contact from '../components/Contact';
import Login from '../components/Login';
import News from '../components/News';
import Register from '../components/Register';
import Rooms from '../components/Rooms';
import Home from './../components/Home'

class ControlURL extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home/" component={Home}/>
                <Route path="/login/" component={Login}/>
                <Route path="/our-rooms/" component={Rooms}/>
                <Route path="/news/" component={News}/>
                <Route path="/contact/" component={Contact}/>
                <Route path="/register/" component={Register}/>
                <Route path="/rooms/:slug.:id.html" component={Detail_room}/>
            </Switch>
        );
    }
}
export default ControlURL;
