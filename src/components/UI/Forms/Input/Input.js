import React from 'react';
import styled from 'styled-components';


const InputWrapper = styled.div`
width: 100%;
display: flex;
position: relative;
flex-direction: column;
margin-bottom: 2.5rem;

&:last-of-type{
    margin-bottom: 5.5rem;
}

`;



const StyledInput = styled.input`

padding: 1rem 2rem;
background-color: var(--color-mainLighter);
color: var(--color-white);
border:none;
font-weight:500;
font-size: 1.4rem;
border-radius: 2.5rem;
margin-bottom: .5rem;


&::placeholder{
    color: var(--white);
}
`;

const Error = styled.div`
color:red;
font-weight:700;
font-size: 1.2rem;
visibility: ${({show}) => (show ? 'visible' : 'hidden')};
opacity: ${({show}) => (show ? '1' : '0')};
transform: translateY(${({show}) => (show ? '15px' : '20px')});

transition: all 0.1s;
position: absolute;
left:0;
bottom:0;

`;


const Input = ({field, form: {touched, errors}, ...props}) => {

    return( 
    <InputWrapper>
        <StyledInput {...field}{...props}/>
        <Error show ={errors[field.name] && touched[field.name]}>{errors[field.name]}</Error>
    </InputWrapper>
    ) 
    

};
   


export default Input;
