// import React, { useEffect, useState } from 'react';

// function StartDetails({ recipeIngredients, recipeDetailsRender }) {
//   const [chave, setChave] = useState('');
//   const [item, setItem] = useState('');

//   useEffect(() => {
//     if (recipeDetailsRender.length > 0 && recipeDetailsRender[0].meals) {
//       console.log('alo meals');
//       chave = 'meals';
//       item = recipeDetailsRender.idMeal;
//     }

//     if (recipeDetailsRender.length > 0 && recipeDetailsRender[0].drinks) {
//       console.log('alo drinks');
//       chave = 'drinks';
//       item = recipeDetailsRender.idDrink;
//     }
//   }, []);

//   const setRecipesStorage = () => {
//     localStorage.setItem('inProgressRecipes', JSON.stringify(
//       {
//         chave: {
//           item: recipeIngredients,
//         },
//       },
//     ));
//   };

//   return (
//     <button
//       type="button"
//       data-testid="start-recipe-btn"
//       className="start-button"
//       onClick={ setRecipesStorage }
//     >
//       Start Recipe
//     </button>
//   );
// }

// StartDetails.propTypes = {}.isRequired;

// export default StartDetails;
