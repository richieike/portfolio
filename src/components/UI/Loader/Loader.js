import React from 'react'
import styled from 'styled-components';


const StyledLoader = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  
  & div{
    position: absolute;
  border: 4px solid var(--color-main);
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

  &:nth-child(1){
    animation-delay: -0.5s;
  }

  @keyframes lds-ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
  }

  }

  

`;

const Loader = () => {
    return (
        <StyledLoader>
         <div/>
         <div/>
         <div/>
         <div/>
        </StyledLoader>
    )
}

export default Loader
