import React, {useEffect, useState} from 'react';

import style from './recipe.module.css';

//pass in props from recipe.js
const Menu = ({title, calories, image, ingredients}) => {

    return(
        <div className = {style.recipe}>
            <h1>{title}</h1>
            <ol>{ingredients.map(ingredient =>(
                <li>{ingredient.text}</li>
            ))}
            </ol>
            <p>{calories}</p>
            <img className = {style.image} src = {image} alt=""/>
        </div>
     );


}

export default Menu