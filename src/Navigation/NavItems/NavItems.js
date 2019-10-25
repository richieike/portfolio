import React from 'react'
import styled from 'styled-components'
import NavItem from './NavItem/NavItem'

const Nav = styled.nav`
    display: flex;
    margin-top: ${props => (props.mobile ? '-6rem': null)};
   
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: ${props => (props.mobile ? 'column': 'row')};
    align-items: center;
    height: 100%;
`;

const NavItems = ({mobile, clicked ,loggedIn}) => {

  let links;

  if(loggedIn.uid){
    links = (

      <Ul moile = {mobile}>
      <NavItem clicked = {clicked} mobile={mobile } link = '/'>
          Home
      </NavItem>
      <NavItem  clicked = {clicked}  mobile={mobile} link ='/recipe'>
          Recipe App
        </NavItem>
        <NavItem  clicked = {clicked}  mobile={mobile} link ='/profile'>
          My Account
        </NavItem>

        <NavItem  clicked = {clicked}  mobile={mobile} link ='/logout'>
          log out
        </NavItem>


      </Ul>
    );
   
  }
  else{

    links = (
      <Ul moile = {mobile}>
    <NavItem  clicked = {clicked}  mobile={mobile} link ='/login'>
      login
    </NavItem>

    <NavItem  clicked = {clicked}  mobile={mobile} link ='/recover'>
      Recover Password
    </NavItem>

    <NavItem  clicked = {clicked}  mobile={mobile} link ='/signup'>
      Sign Up
    </NavItem>
    </Ul>
    )
  }
    return (
      <Nav mobile = {mobile}>     
         {links}
      </Nav>
    )
}

export default NavItems

