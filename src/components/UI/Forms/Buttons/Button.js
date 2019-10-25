import React from 'react';
import styled from 'styled-components';

const StyledButon = styled.button`
width: ${({contain}) => (contain ? 'auto':'100%')};
outline: none;
color: var(--color-white);
font-weight:700;
font-size: 1.2rem;
padding: 1.2rem 4rem;
box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
background-color: ${({color}) => {

    if(color === 'red'){
    return 'var(--error)';
    }else if(color === 'main'){
        return 'var(--color-main)';
        
    } else{
        return 'var(--color-mainLighter)';
    }
}};

margin: 0.5rem 0 2rem 0;
transition: all 0.2s;
border-radius: 2.5rem;

&:hover{
    transform: translate(-3px);
}

&:active{
    transform: translate(2px);
}

&:disabled{
    cursor: not-allowed;
    background-color: #333;
}


`;

const Button = ({children, disabled, loading, color, contain,...rest}) => {
    return (
        <StyledButon color = {color} contain ={contain} disabled = {disabled} {...rest}>
        {loading ? loading : children}
        </StyledButon>
    )
}

export default Button
