import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Formik, Field} from 'formik'
import {FormWrapper, StyledForm} from '../../../hoc/layout/elements'
import * as Yup from 'yup'
import styled from 'styled-components'
import Message from '../../../components/UI/Message/Message'
import Heading from '../../../components/UI/Headings/Heading'
import Input from '../../../components/UI/Forms/Input/Input'
import Button from '../../../components/UI/Forms/Buttons/Button'
import Modal from '../../../components/UI/Modal/Modal'

import * as actions from '../../../store/actions'

//Container wrapper
const ProfileWrapper = styled.div`
    margin-top: 100px;
    position: absolute;
`;
//Used for styling error messages
const MessageWrapper = styled.div`
position: absolute;
bottom: 1rem;
width: 100%;
padding: 0rem 3rem;
`;

const ButtonWrapper = styled.div`
display: flex;
margin-bottom: 2rem;
width: 100%;
justify-content: space-around;

`;

const DeleteWrapper = styled.div`
    cursor: pointer;
    color: var(--error);
    font-size:1.3rem;
    font-weight: 700;
    margin-top: 2rem;
    transition: all .2s;

    &:hover{
        transform: translateY(-3px);
    }

    &:active{
        transform: translateY(2px);
    }

`;

//Setting up profile form
const ProfileSchema = Yup.object().shape({
    //set up credentials for sign up
    firstName: Yup.string()
    .required('please enter your first name')
    .min(2, 'name is too short')
    .max(25, 'name is too long'),

    lastName: Yup.string()
    .required('please enter your last name')
    .min(2, 'name is too short')
    .max(25, 'name is too long'),


    email: Yup.string()
    .email('invalid email')
    .required('the email is required'),
    password: Yup.string()
    
    .min(8, 'Password is too short'),

    confirmPassword: Yup.string().when('password', {
        is: password => password.length > 0,
        then: Yup.string()
        .required('Please confirm password')
    .oneOf([Yup.ref('password'), null], 'Password does not match'),//for checking password and confirmed password matcg
    
    }),
    
});


const Profile = ({firebase, editProfile, loading, error, cleanUp, loadingDelete, errorDelete, deleteUser}) => {

    //used this react hook for component refreshing
    useEffect(() => {
        return() => {
            cleanUp();
        };
    },[cleanUp]);
    //use state to create our own state for function component
    const [modalOpened, setModalOpened] = useState(false);
    //when using if condition - with a true or false operator for loading firebase data always 
    //using a null as ReactDom needs a return state
    if(!firebase.profile.isLoaded) return null;
    
    return (
        <>
        <ProfileWrapper>
        <Formik
        initialValues={{
            //populate this form with user info from firebase
            firstName: firebase.profile.firstName,
            lastName: firebase.profile.lastName,
            email: firebase.auth.email,
            password: '',
            confirmPassword: '' 
        }}
        validationSchema = {ProfileSchema}
        onSubmit ={ async (values, {setSubmitting}) =>{
            //edit profile here
            await editProfile(values);
            setSubmitting(false);
        }}
        >
            {({isSubmitting, isValid}) => {
                console.log(isSubmitting);
                return(

                 <FormWrapper>
                 <Heading noMargin size = "h1" color = "white"> 
                 Edit your profile
                 </Heading>
                 <Heading noMargin size = "h4" color = "white"> 
                 Below you can edit your personal information
                 </Heading>
             <StyledForm>
             
             <Field 
             type = 'text' name = 'firstName' placeholder = 'your first name' 
             component= {Input}/>

             <Field 
             type = 'text' name = 'lastName' placeholder = 'your last name' 
             component= {Input}/>
             
             <Field 
             type = 'email' name = 'email' placeholder = 'your email..' 
             component= {Input}/>
                  
             <Field 
             type = 'password' name = 'password'
             placeholder = 'your password..' component={Input}/>
                
             <Field 
             type = 'password' name = 'confirmPassword'
             placeholder = 'Retype your password' component={Input}/>

             <Button disabled={!isValid || isSubmitting} 
             loading={loading ? 'Saving changes' : null} 
             type = "submit">
                     Save Changes
              </Button>
             <MessageWrapper>
            <Message
             error show={error}
             >
                {error}
            </Message>
             </MessageWrapper>
             <MessageWrapper>
              <Message success show ={error === false}> Saved profile changes successfully!</Message>
                   
              </MessageWrapper>
              <DeleteWrapper onClick = {()=> setModalOpened(true)}>Delete My account</DeleteWrapper>
             </StyledForm>         

               </FormWrapper>

                )
             
           
            }}
           
        </Formik>
       <Modal opened = {modalOpened} closed ={() => setModalOpened(false)}> 
       <Heading noMargin size = "h1" color = "white">
            Delete your account
       </Heading>
       <Heading noMargin size = "h4" color = "white">
           Do you really want to delete your account?
       </Heading>
       <ButtonWrapper>
       <Button color = "red" 
       onClick = {() => deleteUser()}
       contain
        disabled={loadingDelete} 
        loading={loading ? 'deleting user...' : null} 
             >
             Delete
        </Button>
        <Button color ="main"  contain onClick={() => setModalOpened(false)}>
            Cancel
        </Button>
       </ButtonWrapper>
       <Message
             error show={errorDelete}
             >
                {errorDelete}
            </Message>
       </Modal>
       </ProfileWrapper>,
       </>
    );
}

const mapStateToProps = ({firebase, auth}) => ({
    firebase,
    loading: auth.profileEdit.loading,
    error: auth.profileEdit.error,
    loadingDelete: auth.deleteUser.loading,
    errorDelete: auth.deleteUser.error,
})

const mapDispatchToProps = {
    editProfile: actions.editProfile,
    cleanUp: actions.clean,
    deleteUser: actions.deleteUser,
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
