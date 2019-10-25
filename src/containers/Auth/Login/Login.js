import React, {useEffect} from 'react';
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
import jonathan from '../../../imgs/jonathan.jpg';
//Setting up login form
const LoginSchema = Yup.object().shape({

    email: Yup.string()
    .email('invalid email')
    .required('the email is required'),
    password: Yup.string()
    .required('The password is required'),

});


const MessageWrapper = styled.div`
position: absolute;
bottom:0;
`;

const LoginWrapper = styled.div`
    margin-top: 100px;
    position: absolute;
`;

const Login = ({login, loading, error, cleanUp}) => {
    
    //React hook used for error message clean up
    // it runs when component is unmounting to make sure correct error messages show
    useEffect(()=>{
       
        return() =>{
            cleanUp();
        };
    }, [cleanUp]); //remove cleanup action creator once it has completed task

    return (
        <>

        
       
        <LoginWrapper> 

             <Formik
           initialValues={{
               email: '',
               password: ''
           }}
           validationSchema = {LoginSchema}
           onSubmit ={ async (values, {setSubmitting}) =>{
               
              await login(values);
               setSubmitting(false);
           }}
           >
               {({isSubmitting, isValid}) => {


                return(
                    <FormWrapper>
                    <Heading noMargin size = "h1" color = "white"> 
                    Welcome
                    <br></br>
                    <br></br>
                    </Heading>
                    <Heading  noMargin size = "h1" color = "white">
                  My name is Richard Ike, I specialise in development in a number of programming languages
                     - including React JS, Java, HTML5 CSS amongst others for over a decade.
                    <br></br>
                    <br></br>
                    </Heading>
                    <Heading  noMargin size = "h1" color = "white">
                   This website is a full CRUD application, please login if you have registered an account, if not please click on the 'SIGN UP' menu button to register, this site has full deletion of profile functionality.
                   <br></br>
                    <br></br>
                    </Heading>
               
                <StyledForm>
                <Field 
                type = 'email' name = 'email' placeholder = 'your email..' 
                component= {Input}/>
                     
                <Field 
                type = 'password' name = 'password'
                placeholder = 'your password..' component={Input}/>
                   
                   <Button disabled={!isValid || isSubmitting} loading={loading ? 'Sign in' : null} type = "submit">
                        Sign Up 
                 </Button>
                    <MessageWrapper>
                        <Message error show={error}>
                            {error}
                        </Message>
                    </MessageWrapper>
                </StyledForm>
                    
                  
                  </FormWrapper>

                )
                    
                  
              
               }}
              
           </Formik>   

        </LoginWrapper>
            </>

 
    );
};


//destruct the authentication where we map the loading sequence that will match the loading and pass it to Signup 
const mapStateToProps = ({auth}) => ({

    loading: auth.loading,
    error: auth.error,
})

const mapDispatchToProps = {

    login: actions.signIn,
    cleanUp: actions.clean,
}




export default connect(mapStateToProps, mapDispatchToProps)(Login);
