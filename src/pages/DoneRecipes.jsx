import Header from '../components/Header';

function DoneRecipes() {
  const index = 0;
  const tagName = 'Pasta';

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
      <img src="" alt="" data-testid={ `${index}-horizontal-image` } />

      {/* texto da categorai da receita */}
      <p
        data-testid={ `${index}-horizontal-top-text` }
      >
        texto da categoria
      </p>

      {/* texto que contem nome da receita */}
      <p
        data-testid={ `${index}-horizontal-name` }
      >
        texto do nome da receita
      </p>

      <p
        data-testid={ `${index}-horizontal-done-date` }
      >
        O texto da data que a receita foi feita deve;
      </p>

      <button
        type="button"
        data-testid={ `${index}-horizontal-share-btn` }
      >
        Botao compartilhar receita
      </button>

      {/* tags da receitas, todas as tags tem que conter o testid */}
      <span data-testid={ `${index}-${tagName}-horizontal-tag` }>tags da receita</span>

      {/* botao de compartilhar receita */}
    </>
  );
}

export default DoneRecipes;
