import React, { useState,useEffect,Component } from 'react';
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
import Header_user from '../components/Header_user';
import fire from './../js/Firebase';
const ControlURL = ()=> {
        const [user,setUser] = useState('');
        const [email,setEmail] = useState('')
        const [password,setPassword] = useState('')
        const [emailError,setEmailError]= useState('')
        const [passwordError, setPasswordError] = useState('')
        const clearInputs = ()=>{
          setEmail('')
          setPassword('')
        }
        const clearErrors = ()=>{
          setEmailError('')
          setPasswordError('')
        }
        const handleLogin = ()=>{
          clearErrors();
          fire
          .auth()
          .signInWithEmailAndPassword(email,password)
          .catch(err =>{
            switch(err.code){
              case "auth/invalid-email":
              case "auth/user-disabled":
              case "auth/user-not-found":
                setEmailError(err.message);
                break;
              case "auth/wrong-password":
                setPasswordError(err.message);
                break;
            }
          })
        }
        const handleSignup = ()=>{
          clearErrors();
          fire
          .auth()
          .createUserWithEmailAndPassword(email,password)
          .catch(err =>{
            switch(err.code){
              case "auth/email-already-in-use":
              case "auth/invalid-email":
                  {
                      setEmailError(err.message);
                      break;
                  }
              case "auth/wrong-password":
                  {
                      setPasswordError(err.message);
                      break;
                  }
            }
          })
        }
        const handleLogout = ()=>{
          fire.auth().signOut ();
        }
        const authListener = ()=>{
          fire.auth().onAuthStateChanged(user =>{
            if(user){
              clearInputs()
              setUser(user)
            }else{
              setUser("")
            }
          })
        }
        useEffect(()=>{
          authListener()
        },[])
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home/" component={Home}/>
                <Route path="/login/">
                {
                    user ? (
                        <Header_user handleLogout={handleLogout}/>
                    ):(
                        <Login email={email} 
                    setEmail={setEmail} 
                    password={password} 
                    setPassword={setPassword}
                    handleLogin={handleLogin}
                    emailError={emailError}
                    passwordError={passwordError}
                    />
                    )
                }
                </Route>
                <Route path="/our-rooms/" component={Rooms}/>
                <Route path="/news/" component={News}/>
                <Route path="/contact/" component={Contact}/>
                <Route path="/register/">
                    <Register handleSignup = {handleSignup}
                        setEmail={setEmail} 
                        password={password} 
                        setPassword={setPassword}
                    />
                </Route>
                <Route path="/rooms/:slug.:id.html" component={Detail_room}/>
            </Switch>
        );
}
export default ControlURL;
