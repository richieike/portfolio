import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'

import Backdrop from './Backdrop/Backdrop';

const WrappedModal = styled.div`
position: fixed;
top: 50%;
left: 50%;
z-index: 150;
 
transform:  ${({opened}) => (
    opened ? 'translate(-50%, -50% );':'translate(-50%, -80% );')};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
opacity: ${({opened}) => (opened ? '1':'0')};
visibility:  ${({opened}) => (opened ? 'visible':'hidden')};

max-width: 50rem;
width: 100%;
box-shadow: 0 .5rem 3.5rem var(--shadow);
border-radius: 1rem;
background-color: var(--color-mainLight);
transition: all 0.1s;
`;

const InsideWrapper  = styled.div`
position: relative;
padding: 4rem 3rem;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Modal = ({opened, closed, children}) => {
    //create a portal and link root via root id 
    return ReactDOM.createPortal(
    <>
    <Backdrop closed ={closed} opened = {opened}/>
    <WrappedModal opened = {opened}><InsideWrapper>{children}</InsideWrapper></WrappedModal>
    </>, 
        document.getElementById('root-modal')
        );
};

export default Modal
