import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {FormWrapper} from '../../../hoc/layout/elements';
import  Heading from '../../../components/UI/Headings/Heading';
import Button from '../../../components/UI/Forms/Buttons/Button'
import Message from '../../../components/UI/Message/Message'
import * as actions from '../../../store/actions'
import styled from 'styled-components'

const SignupWrapper = styled.div`
    margin-top: 100px;
    position: absolute;
`;

const VerifyEmail = ({sendVerification, error, loading, cleanup}) => {

    //react hook used when component re-renders
    useEffect(() => {

        return() => {
            cleanup();//rens the cleanup function when component unmoounts refreshes to clear error message
        };
    },[cleanup]);

    return (
        <>
        <SignupWrapper>
        <FormWrapper>
            <Heading color = "white" size = "h1">
                Verify your email</Heading>

                <Heading color = "white" bold size = "h4">
                Go to your inbox and verify your email address</Heading>

              <Button loading={loading? 'sending email' : null} 
              onCLick = {()=> sendVerification()}
              disabled = {loading}>
                  Resend verification in email</Button>
                <Message error show={error}>{error}</Message>
                <Message successs show ={error === false}>Message sent successfully </Message>
        </FormWrapper>
        </SignupWrapper>,
        </>
    );
};

const mapStateToProps = ({auth}) => ({
    loading: auth.verifyEmail.loading,
    error: auth.verifyEmail.error,
})

const mapDispatchToProps = {
    
    sendVerification: actions.verifyEmail,
    cleanup: actions.clean,
}


export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
