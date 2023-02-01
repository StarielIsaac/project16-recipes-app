import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import RecommendationsContext from '../context/RecommendationsContext';
import { fetchDetailsDrinks, fetchDetailstMeals } from '../services/ApiRecipeDetails';
import { fetchRecommendationsDrinks,
  fetchRecommendationsMeals } from '../services/Apirecommendations';

function RecipeDetails(props) {
  const maxRecipes = 6;

  const { setDrinksRecommendations, mealsRecommendations,
    drinksRecommendations, setMealsRecommendations } = useContext(RecommendationsContext);
  const [recipeDetailsRender, setDetailsRender] = useState([]);
  const [recipeIngredients, setRecipeIngredients] = useState(null);
  const [renderRecommendation, setRenderRecommendation] = useState(null);

  const { match: { params: { id } } } = props;
  const { history } = props;

  const fetchDetails = async () => {
    let recipeDetailsFetch;
    if (history.location.pathname.includes('/meals/')) {
      recipeDetailsFetch = await fetchDetailstMeals(id);
      setDetailsRender(recipeDetailsFetch.meals);
    }
    if (history.location.pathname.includes('/drinks/')) {
      recipeDetailsFetch = await fetchDetailsDrinks(id);
      setDetailsRender(recipeDetailsFetch.drinks);
    }
  };

  const filterIngredients = () => {
    let auxIngredientes = [];
    const keys = Object.keys(recipeDetailsRender[0]);
    const values = Object.values(recipeDetailsRender[0]);
    for (let i = 0; i < keys.length; i += 1) {
      if (keys[i].includes('Ingredient') && values[i]) {
        const numberBase = keys[i].replace(/[^0-9]/g, '');
        const base = recipeDetailsRender[0][`strMeasure${numberBase}`];
        auxIngredientes = [...auxIngredientes, { [values[i]]: base }];
      }
    }
    setRecipeIngredients(auxIngredientes);
  };

  const fetchRecommendations = async () => {
    if (history.location.pathname.includes('/meals/')) {
      const recommendations = await fetchRecommendationsDrinks();
      setDrinksRecommendations(recommendations.drinks);
    }
    if (history.location.pathname.includes('/drinks/')) {
      const recommendations = await fetchRecommendationsMeals();
      setMealsRecommendations(recommendations.meals);
    }
  };

  const filterRecommendations = () => {
    if (history.location.pathname.includes('/meals/')) {
      const recommendations = drinksRecommendations
        .filter((_, index) => index < maxRecipes);
      setRenderRecommendation(recommendations);
    }

    if (history.location.pathname.includes('/drinks/')) {
      const recommendations = mealsRecommendations
        .filter((_, index) => index < maxRecipes);
      setRenderRecommendation(recommendations);
    }
  };

  useEffect(() => {
    if (mealsRecommendations.length > 0 || drinksRecommendations.length > 0) {
      filterRecommendations();
    }
  }, [mealsRecommendations, drinksRecommendations]);

  useEffect(() => {
    if (drinksRecommendations.length === 0 || mealsRecommendations.length === 0) {
      fetchRecommendations();
    }
  }, []);

  useEffect(() => {
    fetchDetails();
  }, []);

  useEffect(() => {
    if (recipeDetailsRender.length > 0) {
      filterIngredients();
    }
  }, [recipeDetailsRender]);

  return (

    <>
      <h1>aux</h1>
      { recipeDetailsRender.length > 0 && recipeDetailsRender.map((recipe, index) => (
        <div key={ index }>
          <img
            src={ recipe.strImageSource }
            alt=""
            data-testid="recipe-photo"
          />
          <h1
            data-testid="recipe-title"
          >
            {recipe.strMeal || recipe.strDrink}
          </h1>

          <p
            data-testid="recipe-category"
          >
            {`${recipe.strCategory} - `}

            {recipe.strAlcoholic}
          </p>
          <ol>
            {recipeIngredients && recipeIngredients.map((ingredient, i) => (
              <li
                data-testid={ `${i}-ingredient-name-and-measure` }
                key={ i }
              >
                {`${Object.keys(ingredient)} - `}
                {Object.values(ingredient)}
              </li>
            ))}
          </ol>
          <p
            data-testid="instructions"
          >
            {recipe.strInstructions}
          </p>
          <iframe
            src={ recipe.strYoutube }
            data-testid="video"
            width="480"
            height="350"
            title={ recipe.strMeal || recipe.strDrink }
          />
        </div>
      ))}

      <div>
        {renderRecommendation && renderRecommendation.map((recipe, index) => (
          <div
            data-testid={ `${index}-recommendation-card` }
            key={ index }
          >

            <h1 data-testid={ `${index}-recommendation-title` }>
              {recipe.strMeal || recipe.strDrink}
            </h1>
          </div>

        ))}
      </div>

    </>

  );
}

RecipeDetails.propTypes = {}.isRequired;

export default withRouter(RecipeDetails);
