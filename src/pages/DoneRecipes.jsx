import Header from '../components/Header';

function DoneRecipes() {
  return (
    <>
      <Header title="Done Recipes" />
      <h1>DoneRecipes</h1>

      {/* O botão de filtro All */}
      <button
        type="button"
        data-testid="filter-by-all-btn"
      >
        All
      </button>

      {/* O botão de filtro Meals */}
      <button
        type="button"
        data-testid="filter-by-meal-btn"
      >
        Meals
      </button>

      {/* O botão de Drinks  */}
      <button
        type="button"
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>

      {/* imagem do card */}
      <img src="" alt="" data-testid={ `${provisorio}-horizontal-image` } />

      {/* texto da categorai da receita */}
      <p
        data-testid={ `"${provisorio}-horizontal-top-text"` }
      >
        texto da categoria
      </p>

      {/* texto que contem nome da receita */}
      <p
        data-testid={ `${provisorio}-horizontal-name` }
      >
        texto do nome da receita
      </p>

      {/* tags da receitas, todas as tags tem que conter o testid */}
      <span data-testid={ `${index}-${tagName}-horizontal-tag` }>tags da receita</span>

      {/* botao de compartilhar receita */}
      <button
        type="button"
        data-testid={ `${provisorio}-horizontal-share-btn"` }
      >
        Botao compartilhar receita
      </button>

    </>
  );
}

export default DoneRecipes;
