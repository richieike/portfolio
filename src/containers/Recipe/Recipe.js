import React, {useEffect, useState} from 'react';
import Menu from './Menu';
import styled from 'styled-components'
import Heading from '../../components/UI/Headings/Heading';

const MainRecipeWrapper = styled.div`
    position: relative;
      

`;




const Recipe =() => {

    //Declare  authentication consts outside return
    
    const APP_ID = "b9dc6f50";
    const APP_KEY = "5dd44e249c6c142065d871d216317b8e";

    //set a state for the AP
    const [recipes, setRecipes] = useState([]);
    const[search, setSearch] = useState("");
    const [query, setQuery] = useState('chicken');


    useEffect( ()=>{
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);


    };

    const updateSearch = e =>{
        setSearch(e.target.value);//for handling input change
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);// pass search to set query on button press via the form
        setSearch("");
    }

    return(
        <>
        <MainRecipeWrapper>
        
        <Heading noMargin size = "h1" color = "white">
            Please search below 
        </Heading>
       
          <form onSubmit={getSearch} className = "search-form">
              <label  htmlFor = "search-bar" >..............</label>
              <input className = "search-bar" type = "text" value = {search} onChange={updateSearch}/>
              <button  className = "btn green lighten-1 z-depth-0" type = "submit" >
                  Search
              </button>
          </form>
          <div className = "recipie">
          {recipes.map(recipe =>(
                <Menu
                key ={recipe.recipe.label} 
                title={recipe.recipe.label} 
                calories={recipe.recipe.calories} 
                image={recipe.recipe.image}
                ingredients = {recipe.recipe.ingredients}
                />
            ))};
          </div>
          
       

        </MainRecipeWrapper>,
        </>
         
    
    )
}

export default Recipe