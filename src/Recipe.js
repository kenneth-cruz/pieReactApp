import React from 'react';
import style from './recipe.module.css';
// passing the props from App.js into this component
const Recipe = ({title, calories, image, ingredients, yields}) => {
  return(
    <div className={style.recipe} >
      <h1 className= {style.title}>{title}</h1>
      <p> Number of Calories: {calories} </p>
      <img src={image} alt="" />
      <h3> Recipe: </h3>
      <ol>
        {ingredients.map(ingredient =>(
          <li> {ingredient.text} </li>
        ))}
      </ol>
      <h5> Serves: {yields} </h5>
    </div>
  )
}

export default Recipe;
