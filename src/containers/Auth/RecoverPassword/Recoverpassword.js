import React from 'react'
import {FormWrapper, StyledForm} from '../../../hoc/layout/elements'
import Heading from '../../../components/UI/Headings/Heading'
import {Formik, Field} from 'formik'
import * as Yup from 'yup';
import {connect} from 'react-redux';
import Message from '../../../components/UI/Message/Message'

import Input from '../../../components/UI/Forms/Input/Input'
import Button from '../../../components/UI/Forms/Buttons/Button'
import styled from 'styled-components'

import * as actions from '../../../store/actions'
// create const object that will hold the yup object and validation initialisation
const RecoverSchema = Yup.object().shape({

    email: Yup.string()
    .email('invalid email')
    .required('the email is required'),


});

const RecoverWrapper = styled.div`
    position: absolute;
`;

const Recoverpassword = ({error, loading, sendEmail}) => {
    return (
        <>
        <RecoverWrapper>
        <Formik initialValues={{
            email: '',
          
        }}
        validationSchema = {RecoverSchema}
        onSubmit ={ async (values, {setSubmitting}) =>{
            await  sendEmail(values);
             setSubmitting(false);
         }}
        >
            {({isSubmitting, isValid})=>(
                <FormWrapper>
                <Heading size ='h1' color = "white">Recover password</Heading>
                <Heading size ='h2' bold color = "white">type in email to recover password</Heading>
                
                <StyledForm>
                <Field 
                type = 'email' name = 'email'
                placeholder = 'your email..' component={Input}/>
                   <Button disabled={!isValid || isSubmitting} 
                   loading={loading ? 'Sendng recovery email' : null} 
                   type = "submit">
                        Recover email
                 </Button>

                 
                <Message error show={error}>{error}</Message>
                <Message successs show ={error === false}>Recover Email sent     </Message>

                </StyledForm>
            </FormWrapper>

            )}
        </Formik>
        </RecoverWrapper>

        </>
    )
}

//this gives us actions to our state
const mapStateToProps = ({auth}) => ({
    loading: auth.recoverPassword.loading,
    error: auth.recoverPassword.error,
});

const mapDispatchToProps = {
   
    sendEmail: actions.recoverPassword

}


export default connect(mapStateToProps, mapDispatchToProps)(Recoverpassword)
