import React from 'react'

import styled, {css} from 'styled-components';

//base style for all the headings
const BaseStyle = css`
color: ${({color}) => 
color === 'white' ? 'var(--color-white)': 'var(--color-main)'};
font-weight: 300;
margin-top:0;

margin-bottom: ${({noMargin}) => (noMargin ? '0rem': '1rem')};

`;


const Heading1 = styled.h1`
font-size: 1.8rem;
    ${BaseStyle}
`;

const Heading2 = styled.h2`
font-size: 1.5rem;
${BaseStyle}
`;

const Heading3 = styled.h3`
font-size: 1.3rem;
${BaseStyle}
`;

const Heading4 = styled.h4`
font-size: 1.2rem;
${BaseStyle}
`;




const Heading = ({children, color, noMargin, size}) => {
  
    
    if(size === 'h1') 
   return (<Heading1 noMargin ={noMargin} color = {color}>
   {children}
   </Heading1>
   );

   if(size === 'h2') 
   return (<Heading2 noMargin ={noMargin} color = {color}>
   {children}
   </Heading2>
   );

   if(size === 'h3') 
   return (<Heading3 noMargin ={noMargin} color = {color}>
   {children}
   </Heading3>
   );

   if(size === 'h4') 
   return (<Heading4 noMargin ={noMargin} color = {color}>
   {children}
   </Heading4>
   );


}

export default Heading
