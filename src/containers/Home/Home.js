import React from 'react'
import styled from 'styled-components'
import Heading from '../../components/UI/Headings/Heading'



const Wrapper = styled.div`
width: 100%;
left: 100px;
height: 100%;
min-height: calc(100vh - 6rem);
margin-top: 100px;
position: absolute;
`;

const Home = () => {
    return (
        <Wrapper>
       
    
        <Heading noMargin size = "h1" color = "white">
            Richard Ike
        </Heading>
        <Heading noMargin size = "h1" color = "white">
        <br></br>
            Welcome to my website, here you will be able to see all the latest app that I am building 
        </Heading>
        <Heading noMargin size = "h1" color = "white">
        <br></br>
        First, let me introduce myself, my name is Richard Ike and I specialise in development in a number of programming languages 
        <br></br>- including React JS (this site has been built using this language) Java, HTML5 CSS amongst others for over a decade.
        </Heading>
        <Heading noMargin size = "h1" color = "white">
        <br></br>
        In my time I have built many varieties of website, games and adverts in company such as Bwin (GVC Holdings) Ogilvy and Publicis to name a few.
        </Heading>
        <Heading noMargin size = "h1" color = "white">
        
        I will be adding new apps here please feel free to check them out -also you can delete your profile via "MY ACCOUNT" on the menu.
        </Heading>
      

      
     
    </Wrapper>
    )
}

export default Home
