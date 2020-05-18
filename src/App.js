import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';
import Pie from './images/pieGif.gif'

const App = () => {

  const APP_ID = '6bab65fe';
  const APP_KEY = '974fa7c1868451da7351aed42ef1f9db';


  // const [counter, setCounter] = useState(0);
  // setting the state to whatever comes back from the APP
  const [recipes, setRecipes] = useState([]);
  // create a state for our search
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getRecipes();
    // adding the empty brackets allows this function to only run once
    // query will only run one time, when the submit button is run.
  }, [query]);



// API Request
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}+pie&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }



  // take all the recipes and map over the objects in the array.

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    // prevents the refreshing of the page
    e.preventDefault();
    setQuery(search)
    // setting it back to be an empty string
    setSearch('');
  }

  return (
    <div className ="App">
      <h1 className="pieSelector"> Find My Pie App 🥧 </h1>
      <div className="pieImageHolder">
        <img className="pieImage" src={Pie} alt="a pie" />
      </div>
      <div className="formHolder">
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" title="fruit for your 🥧"
          placeholder="What type of Fruit do you have? " required value={search} onChange = {updateSearch}/>
          <button className="search-button" type="submit">
          search
          </button>
        </form>
      </div>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
          key = {recipe.recipe.label}
          title={recipe.recipe.label}
          calories = {Math.floor(recipe.recipe.calories)}
          image = {recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}
          yields = {recipe.recipe.yield}/>
      ))}
      </div>
    </div>
  );
}

export default App;
