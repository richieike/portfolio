//allows combing reducers into one reducer
import {combineReducers} from 'redux';
import{firebaseReducer} from 'react-redux-firebase';
import authReducer from './authReducer';

export default combineReducers({

    //object to appear in store (which will hold the state)
    auth: authReducer,
    firebase: firebaseReducer,

});