import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable'; //? Polyfilling for everything else
import 'regenerator-runtime/runtime'; //? Polyfilling for async/await

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

//! Project Overview and Planning
//! Loading a recipe from API
//! Rendering the recipe
//! Listening for load and hashchange events
//! MVC Architecture
//! Refactoring from MVC
//! Helpers and configuration files
//! Event Handlers in MVC: Publisher-Subscriber Pattern
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
    console.error(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();

// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);
