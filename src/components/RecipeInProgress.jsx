import React from 'react';

function RecipeInProgress() {
  return (
    <div>
      <label
        htmlFor="checkbox"
        // data-testid={ `${index}-ingredient-step` }
      >
        <input type="checkbox" />
        {/* { provisorio} */}
      </label>
      <h1 data-testid="recipe-title">
        Recipe In Progress
      </h1>
      <img data-testid="recipe-photo" src="" alt="" />
      <button
        type="button"
        data-testid="share-btn"
        // onClick={ provisorio }
      >
        Compartilhar
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
        // onClick={ provisorio }
      >
        Favoritar
      </button>
      <p data-testid="recipe-category">provisorio</p>
      <p data-testid="instructions">provisorio</p>
      <button
        type="button"
        data-testid="finish-recipe-btn"
        // onClick={ provisorio }
      >
        Finalizar Receita
      </button>
    </div>
  );
}

export default RecipeInProgress;
