
import * as actions from '../actions/actionTypes' //Load in action types to reducer


const initState = {

    error: null,
    loading: false,
    verifyEmail: {
        error: null,
        loading: false,
    },

    recoverPassword: {
        error: null,
        loading: false,
    },

    profileEdit: {
        error: null,
        loading: false,
    },
    deleteUser: {
        error: null,
        loading: false,
    },
};

//helper functions

const authStart = state => {
  return  {...state, loading: true};


};

const authEnd = state => {
    return  {...state, loading: true};
  
  
  };

  const authFail = (state, payload) => {
    return  {...state, error: payload};
  
  
  };

  const verifyStart = state=> {
    return {...state, verifyEmail:{...state.verifyEmail, loading: true},};
  
  
  };

  const verifySuccess = state=> {
    return {...state, verifyEmail:{...state.verifyEmail, loading: false, error: false},};
  
  
  };

  const verifyFail = (state, payload)=> {
    return {...state, verifyEmail:{...state.verifyEmail, loading: false, error: payload},};
  
  
  };

  const authSuccess = state => {
    return  {...state, error: false};
    
  
  };

  const recoverStart = state => {
    return{...state, 
        recoverPassword:{...state.recoverPassword, loading: true},};

  }

  const recoverSuccess = state => {
    return{...state, 
        recoverPassword:{...state.recoverPassword, loading: false, error: false},};

  }

  const recoverFail = (state, payload) => {

    return{...state, 
        recoverPassword:{...state.recoverPassword, loading: false, error: payload},};
  }

  const profileEditStart = state => {
    return{
        ...state,
        profileEdit: {...state.profileEdit, loading: true},
    };
  }

  const profileEditFail = (state, payload) => {

    return{
        ...state,
        profileEdit: {...state.profileEdit, loading: false, error: payload},
    };
  }

  const profileEditSuccess = state => {
    return{
        ...state,
        profileEdit: {...state.profileEdit, loading: false, error: false},
    };
  }

  const deleteStart = state => {

    return{
        ...state,
         deleteUser: {...state.deleteUser, loading: true},
     };          
  }

  const deleteFail = (state, payload) => {
    return{
        ...state,
         deleteUser: {...state.deleteUser, loading: false, error: payload},
     };  

  }

  const cleanUp = state => {
    return{
        ...state, 
        error:null, 
        loading: false,
        verifyEmail:{...state.verifyEmail, loading: false, error: null},
        recoverPassword:{...state.recoverPassword, loading: false, error: null},
        profileEdit:{...state.profileEdit, loading: false, error: null},
    };
  }

export default(state = initState, {type, payload}) => {

   switch (type) {
       case actions.AUTH_START:
           return authStart(state);
        
        case actions.AUTH_END:
            return authEnd(state);
            
        case actions.AUTH_FAIL:
            return authFail(state, payload);
   
        case actions.AUTH_SUCCESS:
                return authSuccess(state);
        
        case actions.CLEAN_UP:
            return cleanUp(state);

        case actions.VERIFY_START:
            return verifyStart(state);

        case actions.VERIFY_SUCCESS:
            return verifySuccess(state);

        case actions.VERIFY_FAIL:
             return verifyFail(state, payload);

        case actions.RECOVER_START:
            return recoverStart(state);
        
        case actions.RECOVER_SUCCESS:
            return recoverSuccess(state);

        case actions.RECOVER_FAIL:
            return recoverFail(state, payload);

        case actions.PROFILE_EDIT_START:
            return profileEditStart(state);
        
        case actions.PROFILE_EDIT_SUCCESS:
              return profileEditSuccess(state);
            
        case actions.PROFILE_EDIT_FAIL:
                return profileEditFail(state, payload);
          case actions.DELETE_START:
                  return deleteStart(state);                                               
        
        case actions.DELETE_FAIL:
                            return deleteFail(state, payload); 
       default:
           return state;
   }
};

