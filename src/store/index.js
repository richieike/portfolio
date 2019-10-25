//global state for store 

import {compose, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import firebase from '../Firebase/Firebase';

import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import {reduxFirestore, getFirestore} from 'redux-firestore';
// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
    attachAuthIsReady: true,//displays user profile when ready (on reload)
  
}

//using advanced store set up to hide redux devtools from ppl seeing reducers
const composeEnhancers = 
    process.env.NODE_ENV === 'development' 
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 
    : compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        reactReduxFirebase(firebase, rrfConfig),
        reduxFirestore(firebase),
        applyMiddleware(thunk.withExtraArgument({getFirebase, 
            getFirestore}))
        )

);


export default store;




