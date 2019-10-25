import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Li = styled.li`
display: flex;
height: 100%;

`;
//for styling components use const then assign style to Navlink
const StyledNavLink = styled(NavLink)`
    display:flex;
    text-transform: uppercase;
    align-items: center;
    border-bottom: ${props => props.mobile ? '1px solid transparent': '2px solid transparent'};
    font-size: 1.2rem;
    padding: 1rem;
    margin: 0 2rem;
    font-weight: 400;
    color: var(--color-white);
    transition: all 0.2s;
    
&:hover{
    border-bottom: 2px solid var(--color-mainLighter);
    color: var(--color-mainLight);
}

&.active{
    border-bottom: 2px solid var(--color-mainLighter);
    color: var(--color-mainLight);

}


`;


const NavItem = ({link, children, mobile, clicked}) => {
    return (
        <Li>
            <StyledNavLink onClick={clicked} exact activeClassName = "active" to ={link}>{children}</StyledNavLink>
        </Li>
    );
}

export default NavItem
