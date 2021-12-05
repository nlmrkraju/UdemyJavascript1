import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';

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
//! Implementing Search Results - Part 2
//! Implementing Pagination - Part 1
//! Implementing Pagination - Part 2
//! Updating Recipe Servings

// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    //? 0) Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());

    //? 1) Updating bookmarks view
    bookmarksView.update(model.state.bookmarks);

    //? 2) Loading Recipe
    await model.loadRecipe(id);

    //? 3) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError(`${err} 🌋🌋🌋🌋`);
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    //? 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    //? 2) Load search results
    await model.loadSearchResults(query);

    //? 3) Render results
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage());

    //? 4) Render inital pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  //? 3) Render new results
  resultsView.render(model.getSearchResultsPage(goToPage));

  //? 4) Render new pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  //? Update the recipe servings (in state)
  model.updateServings(newServings);

  //? Update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  //? 1) Add/remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  //? 2) Updte recipe view
  recipeView.update(model.state.recipe);

  //? 3) Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
init();

// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);
