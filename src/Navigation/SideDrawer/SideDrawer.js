import React, {useState} from 'react'
import Logo from '../../components/Logo/Logo'
import styled from 'styled-components'


//import NavItems from '../NavItems/NavItems'
import Hamburger from './Hamburger/Hamburger';
import NavItems from '../NavItems/NavItems';

const FixedWrapper = styled.header`
position: fixed;

background-color: var(--color-white);
padding: 0rem 2rem;
z-index: 10;
top: 0;
left:0;
width: 100%;
height: 6rem;

display:none;

@media ${props => props.theme.mediaQueries.smallest}{

    display: flex;
}

`;

const Wrapper = styled.div`
display: flex;
height:100%;
width: 100%;
justify-content: space-between;
align-items: center;
`;




const Menu = styled.div`
margin-top: 6rem;
width: 100%;
background-color: var(--color-mainDark);
height: 100vh;
opacity: ${props => props.opened ? '1' : '0'};
transform: translateY(${props => (props.opened ? '0%': '-100%') });
transition: all 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
position: fixed;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;    

`;

const SideDrawer = ({loggedIn}) => {

    const [isOpened, setIsOpened] = useState(false); //set inital sidedrawer state to closefd

    return (
        <>
    <FixedWrapper>
        <Wrapper>
       <Logo/>  
      
        </Wrapper>
    </FixedWrapper>
    <Menu opened = {isOpened}>
           <NavItems loggedIn ={loggedIn} mobile clicked ={() => setIsOpened(false)}/>
        </Menu>
    <Hamburger opened = {isOpened} clicked = {() =>setIsOpened(!isOpened)}/>
    
      

    </>
    );
}

export default SideDrawer

