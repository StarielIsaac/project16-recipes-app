export const setRecipesStorage = (chave, idItem, recipeIngredients) => {
  const progressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];
  localStorage.setItem('inProgressRecipes', JSON.stringify(
    { ...progressRecipes,
      [chave]: {
        ...progressRecipes[chave],
        [idItem]: recipeIngredients,
      },
    },
  ));
};

// const exemplo1 = (id, setShowHeart, showHeart) => {
//   const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
//   if (showHeart) {
//     const newFavoriteRecipes = favoriteRecipes.filter((ele) => ele.id !== id) || [];
//     localStorage.setItem('favoriteRecipes', JSON.stringify(newFavoriteRecipes));
//   }
//   setShowHeart(!showHeart);
// };

export const setFavoriteRecipesStorage = (recipeDetailsRender) => {
  console.log(recipeDetailsRender);
  let id;
  let type;
  let nationality;
  let category;
  let alcoholicOrNot;
  let name;
  let image;

  if (recipeDetailsRender[0].idMeal) {
    const { idMeal, strArea, strCategory,
      strMeal, strMealThumb, strAlcoholic } = recipeDetailsRender[0];
    id = idMeal;
    type = 'meal';
    nationality = strArea || '';
    category = strCategory || '';
    alcoholicOrNot = strAlcoholic || '';
    name = strMeal;
    image = strMealThumb;
  }

  if (recipeDetailsRender[0].idDrink) {
    const { idDrink, strArea, strCategory,
      strAlcoholic, strDrink, strDrinkThumb } = recipeDetailsRender[0];

    id = idDrink;
    type = 'drink';
    nationality = strArea || '';
    category = strCategory || '';
    alcoholicOrNot = strAlcoholic || '';
    name = strDrink;
    image = strDrinkThumb;
  }

  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  localStorage.setItem('favoriteRecipes', JSON.stringify(
    [...favoriteRecipes,
      {
        id,
        type,
        nationality,
        category,
        alcoholicOrNot,
        name,
        image,
      },
    ],
  ));
  // exemplo1(id, setShowHeart, showHeart);
};
