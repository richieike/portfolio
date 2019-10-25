import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';
import {BrowserRouter} from 'react-router-dom';

//Wraps the whole app
import {Provider} from 'react-redux';

import theme from './utils/theme';
import App from './App';
import GlobalStyles from './utils/global';

import store from './store';
import styled from 'styled-components'
import Loader from './components/UI/Loader/Loader'


//Wrapper used for loader
const Wrapper = styled.div`
margin-top: 200px;
width:100%;
height:100%;
display: flex;
align-items: center;
justify-content: center;
`;

//reusable
const root = document.getElementById('root');

//userd for app not ready status
ReactDOM.render(

    <ThemeProvider theme = {theme}>
    <>
    <Wrapper>
        <Loader/>

    </Wrapper>
    <GlobalStyles/>
    </>
    </ThemeProvider>,
    root
    );

//use authIsReady passed in from index of Reducer dispathed and used then method with callback
store.firebaseAuthIsReady.then(() => {

    ReactDOM.render(
        <Provider store ={store}>
             <BrowserRouter>
         <ThemeProvider theme = {theme}>
            <>
            <App/> 
        <GlobalStyles/>
        </>
        </ThemeProvider>
        </BrowserRouter>
        </Provider>, root
    
    );
    
})


