import * as actions from '../actions/actionTypes'




//Sign up action creator
export const signUp = data => async ( dispatch, getState, {getFirebase, getFirestore}) => {

    
    const firebase = getFirebase();
    const firestore = getFirestore();

    //dispatch actions from the authReducer before connecting to firebse
    dispatch({type: actions.AUTH_START});
    
    try{
        const res = await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);

        //send the user verification 
        const user = firebase.auth().currentUser;
        await user.sendEmailVerification();

        await firestore
        .collection('users')
        .doc(res.user.uid).set({
            firstName: data.firstName,
            lastName: data.lastName
        });

        dispatch({type: actions.AUTH_SUCCESS});

    }catch(err){

       dispatch({type: actions.AUTH_FAIL, payload: err.message})

    }

    dispatch({type: actions.AUTH_END});
}

//Log out action creator

export const signOut = () => async (dispatch, getState, {getFirebase})=>{

    const firebase = getFirebase();

    try{
        //user will be redirected to logout once signout  complete 
        await  firebase.auth().signOut();

    }catch(err){
        console.log(err.message);
    }
};

//login action creator

export const signIn = (data) => async (dispatch, getState, {getFirebase})=>{

    const firebase = getFirebase();
    //dispach same state as auth start
    dispatch({type: actions.AUTH_START});
    try{

        await firebase.auth().signInWithEmailAndPassword(data.email, data.password);
        dispatch({type: actions.AUTH_SUCCESS});

    }catch(err){
        console.log(err);
        dispatch({type: actions.AUTH_FAIL, payload: err.message})
    }
    dispatch({type: actions.AUTH_END});
};

//Error cleen up

export const clean = () => ({

    type: actions.CLEAN_UP,

});

//send recover password

export const recoverPassword = data => async(dispatch, getState, {getFirebase}) => {

    const firebase = getFirebase();

    //always dipatch inital ("action start") for logic
    dispatch({type: actions.RECOVER_START});
    try{
        //if successfull 
      await  firebase.auth().sendPasswordResetEmail(data.email);
        dispatch({type: actions.RECOVER_SUCCESS});

    }catch(err){

        //fire action type on on err
        dispatch({type: actions.RECOVER_FAIL, payload: err.message});

    }

}



//Verify email

export const verifyEmail = () => async(dispatch, getState, {getFirebase})=>{

    const firebase = getFirebase();

    //always dispatch verify_start action creator first
    dispatch({type: actions.VERIFY_START});

    try{
        const user = firebase.auth().currentUser;
        await user.sendEmailVerification();    
        dispatch({type: actions.VERIFY_SUCCESS})
    } catch(err){
        dispatch({type: actions.VERIFY_FAIL, payload: err.message});
        console.log(err.message);
    }

};


// edit profile

export const editProfile = data => async(dispatch, getState, {getFirestore, getFirebase})  => {
    
    const firebase = getFirebase();
    const firestore = getFirestore();

    //to get access to user email
    const user = firebase.auth().currentUser;
  
    //destructing properties from getState and assign them to const
    const {uid: userId, email: userEmail} = getState().firebase.auth;

    dispatch({type: actions.PROFILE_EDIT_START});

    try{
        //edit user profile

        if(data.email !== userEmail){
            await user.updateEmail(data.email);
        }

        await firestore.collection('users').doc(userId).set({

            //updating firestore with details from the form
            firstName: data.firstName,
            lastName: data.lastName,


        });

        if(data.password.length >0){

            await user.updatePassword(data.password);
        }

        dispatch({type: actions.PROFILE_EDIT_SUCCESS});
    } catch(err){

        dispatch({type: actions.PROFILE_EDIT_FAIL, payload: err.message});
    }

}

//delete user

export const deleteUser = () => async(dispatch, getState, {getFirebase, getFirestore}) => {

    const firebase = getFirebase();
    const firestore = getFirestore();
    const user = firebase.auth().currentUser; //get the current user
    const userId = getState().firebase.auth.uid;
    dispatch({type: actions.DELETE_START});

    try{
       
        //remove user from collection first
        await firestore.collection('users').doc(userId).delete();

        await user.delete();
    }
    catch(err){
        dispatch({type: actions.DELETE_FAIL, payload: err.message});
    }


}