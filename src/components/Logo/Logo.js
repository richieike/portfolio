import React from 'react'
import styled from 'styled-components'
import Heading from '../../components/UI/Headings/Heading'


//create the wrapper component
const LogoWrapper = styled.div`
    color: var(--color-white);
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 1.2rem;
    padding: 1rem;
`;

const Logo = () => {
    return (
        <LogoWrapper>   <Heading noMargin size = "h1" color = "white">
        Richard Ike
    </Heading></LogoWrapper>
     
    )
};

export default Logo
