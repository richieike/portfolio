import React, {useEffect} from 'react'
import {Formik, Field} from 'formik';
import * as Yup from 'yup';
import {connect} from 'react-redux';
import styled from 'styled-components';
//import styled form from global css
import {FormWrapper, StyledForm} from '../../../hoc/layout/elements';

import Input from '../../../components/UI/Forms/Input/Input';
import Button from '../../../components/UI/Forms/Buttons/Button';
import Heading from '../../../components/UI/Headings/Heading';

import Message from '../../../components/UI/Message/Message';

import * as actions from '../../../store/actions'

const SignupWrapper = styled.div`
    margin-top: 100px;
    position: absolute;
`;
//Setting up login form
const SignupSchema = Yup.object().shape({
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
    .required('The password is required')
    .min(8, 'Password is too short'),

    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password does not match')//for checking password and confirmed password matcg
    .required('Please confirm password'),
});


const MessageWrapper = styled.div`
position: absolute;
bottom:0;
`;

const Signup = ({signUp, loading, error, cleanUp}) => {

    //React hook used when component has unmounted to clear the error messages
    //to make sure correct error messages are displayed and erased after use
    useEffect(() =>{

        return()=>{
            cleanUp();
        };
    },[cleanUp]);

    return (
        <>

           <SignupWrapper>
           <Formik
           initialValues={{
               firstName: '',
               lastName: '',
               email: '',
               password: '',
               confirmPassword: '' 
           }}
           validationSchema = {SignupSchema}
           onSubmit ={ async (values, {setSubmitting}) =>{
               console.log(values);

              await signUp(values);
               setSubmitting(false);
           }}
           >
               {({isSubmitting, isValid}) => {
                   console.log(isSubmitting);
                   return(

                    <FormWrapper>
                    <Heading noMargin size = "h1" color = "white"> 
                    Sign Up
                    </Heading>
                    <Heading noMargin size = "h2" color = "white"> 
                    fill in your details to register
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
            
                <Button disabled={!isValid || isSubmitting} loading={loading ? 'Signing up' : null} type = "submit">
                        <Heading noMargin size = "h1" color = "white">
                        Sign Up 
                        </Heading>
                 </Button>
               
                <MessageWrapper>
                <Message error show={error}>{error}</Message>
                </MessageWrapper>
                 
                </StyledForm>         

                  </FormWrapper>

                   )
                
              
               }}
              
           </Formik>   
           </SignupWrapper>,
            </>
 
    );
};

//destruct the authentication where we map the loading sequence that will match the loading and pass it to Signup 
const mapStateToProps = ({auth}) => ({

    loading: auth.loading,
    error: auth.error,
})

const mapDispatchToProps = {

    signUp: actions.signUp,
    cleanUp: actions.clean,
}


export default  connect(mapStateToProps, mapDispatchToProps)(Signup);

