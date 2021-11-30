import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';

import 'core-js/stable'; //? Polyfilling for everything else
import 'regenerator-runtime/runtime'; //? Polyfilling for async/await
import { async } from 'regenerator-runtime';

//! Project Overview and Planning
//! Loading a recipe from API
//! Rendering the recipe
//! Listening for load and hashchange events
//! MVC Architecture
//! Refactoring from MVC
//! Helpers and configuration files
//! Event Handlers in MVC: Publisher-Subscriber Pattern
//! Implementing Error and Success Messages
//! Implementing Search Results - Part 1
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    //? 1) Loading Recipe
    await model.loadRecipe(id);

    //? 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError(`${err} 🌋🌋🌋🌋`);
  }
};

const controlSearchResults = async function () {
  try {
    //? 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    //? 2) Load search results
    await model.loadSearchResults(query);

    //? 3) Render results
    console.log(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();

// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);
