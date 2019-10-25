import React from 'react'
import styled from 'styled-components'
import Heading from '../../components/UI/Headings/Heading'
import {Container} from '../../hoc/layout/elements'

const Wrapper = styled.div`
width: 100%;
align-self: flex-start;

height: 100%;
min-height: calc(100vh - 6rem);
background-color: var(--color-mainLight);

`;

//Use another div as container div is used by other components such as menu and dont want style changes effecting this

const InnerWrapper = styled.div`
display: flex;
padding: 5rem 4rem;
flex-direction: column;
align-items: center;

`;

const Todos = () => {
    return (
    <Wrapper>
        <Container>
        <InnerWrapper>
        <Heading noMargin size = "h1" color = "white">
            App Ideas
        </Heading>
        <Heading size = "h2" color = "white">
            Submit you app ideas
        </Heading>
        </InnerWrapper>
      

        </Container>
     
    </Wrapper>
    )
}

export default Todos
