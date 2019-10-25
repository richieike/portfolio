import React from 'react'
import styled from 'styled-components';

const P = styled.p`
font-weight: 700;
font-size: 1.2rem;
color: ${({error, successs}) => {
    if(error) return 'var(--error)';
    if(successs) return 'green';
    else return 'var(--color-main)';
}};

opacity: ${({show}) => (show? '1': '0')};
transform: translate(${({show}) => (show? '30px': '0px')});
transition: all 0.2s;
text-align: center;

`;


const Message = ({children, error, successs, show}) => {
    return (

      <P error ={error} successs={successs} show ={show}>{children} </P>
    )
}

export default Message
