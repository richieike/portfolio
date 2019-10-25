import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

position: fixed;
top: 0%;
left: 0%;
background-color: rgba(0,0,0,0.7);
z-index: 100;
width: 100%;
height:  100vh;
opacity: ${({opened}) => (opened ? '1' : '0')};
visibility: ${({opened}) => (opened ? 'visible' : 'hidden')};
transition: all 0.1s;


`;
//pass in states for profile
const Backdrop = ({opened, closed}) => {
    console.log('clicked');
    return (
        <Wrapper onClick ={closed} opened = {opened}/>
    )
}

export default Backdrop
