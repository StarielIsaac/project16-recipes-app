import Header from '../components/Header';

function FavoriteRecipes() {
  return (
    <div>
      <Header title="Favorite Recipes" />
      <forms>
        <button
          type="button"
          data-testid="filter-by-all-btn"
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-meal-btn"
        >
          Meals
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
        >
          Drinks
        </button>
        <br />
        <br />
        {/* Fazer map dos elementos contidos em localStorage.getItem('favoriteRecipes') */}
        <img
          src="provisorio"
          alt="provisorio"
          // data-testid={ `${index}-horizontal-image"` }
        />
        <br />
        <br />
        <p
          name="HorizontalTopText"
          // data-testid={ `${index}-horizontal-top-text` }
        >
          Categoria: Provisorio
        </p>
        <br />
        <p
          name="HorizontalName"
          // data-testid={ `${index}-horizontal-name` }
        >
          Nome da Receita: Provisorio
        </p>
        <button
          type="button"
          // data-testid={ `${index}-horizontal-share-btn` }
        >
          Compartilhar a Receita
        </button>
        <button
          type="button"
          // data-testid={ `${index}-horizontal-favorite-btn` }
        >
          favoritar a receita
        </button>
      </forms>
    </div>
  );
}

export default FavoriteRecipes;
