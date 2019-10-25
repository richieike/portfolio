import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import {connect} from 'react-redux';
import Layout from './hoc/layout/Layout';

import Home from './containers/Home/Home'
import Recipe from './containers/Recipe/Recipe'

import Login from './containers/Auth/Login/Login'
import Signup from './containers/Auth/SignUp/Signup'
import Logout from './containers/Auth/Logout/Logout'
import VerifyEmail from './containers/Auth/VerifyEmail/VerifyEmail';
import Recoverpassword from './containers/Auth/RecoverPassword/Recoverpassword';
import Profile from './containers/Auth/Profile/Profile';

import styled from 'styled-components';
import jonathan from '../src/imgs/jonathan.jpg';

//create the wrapper component
const BackgroundWrapper = styled.div`
    margin-top: -80px;
   position: fixed;
   overflow: hidden;
   width:100%;
   left: 0px;

`;


const App = ({loggedIn, emailVerified}) =>{



    let routes;
    //condition for verified email address.
    if (loggedIn && !emailVerified){
        //display routes based on emailVerified being false
        routes =(
            <Switch>
                <Route exact path = "/verify-Email" component = {VerifyEmail}/>
                <Route exact path ="/logout" component={Logout}/>
                <Redirect to ="/verify-Email" />        
            </Switch>
        );
    }

    else if(loggedIn && emailVerified){
        routes = (
            <Switch>
            <Route exact path = "/home" component={Home}/>
            <Route exact path = "/profile" component = {Profile}/>
            <Route exact path ="/recipe" component={Recipe}/>
            <Route exact path ="/logout" component={Logout}/>
            <Redirect to ="/home" />     
            </Switch>  
        );
    }
    else if (!loggedIn && !emailVerified) {

        routes =(
            <Switch>
             <Route exact path ="/recover" component={Recoverpassword}/>
             <Route exact path ="/login" component={Login}/>
             <Route exact path ="/signup" component={Signup}/>
             
             <Redirect to ="/login" />   
            </Switch>

        );
       
    }
    
    return( 
        <>
        <BackgroundWrapper>
        <img src ={jonathan} alt = "Background"/>
           
           
            </BackgroundWrapper>,
     <Layout>
      
            {routes}
          
    </Layout>
    </>
    )

};

const mapStateToProps = ({firebase}) => ({
    //condition to check if logged in via uid
    loggedIn: firebase.auth.uid,
    emailVerified: firebase.auth.emailVerified,
})




export default connect(mapStateToProps)(App);