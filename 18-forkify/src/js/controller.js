import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable'; //? Polyfilling for everything else
import 'regenerator-runtime/runtime'; //? Polyfilling for async/await

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

//! Project Overview and Planning
//! Loading a recipe from API
//! Rendering the recipe
//! Listening for load and hashchange events
//! MVC Architecture
//! Refactoring from MVC
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
    alert(err);
  }
};

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);

// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);
