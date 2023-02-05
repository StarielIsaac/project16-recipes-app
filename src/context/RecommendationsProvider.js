import { useMemo, useState } from 'react';
import RecommendationsContext from './RecommendationsContext';

function RecommendationsProvider({ children }) {
  const [mealsRecommendations, setMealsRecommendations] = useState([]);
  const [drinksRecommendations, setDrinksRecommendations] = useState([]);
  const [recipeDetailsRender, setDetailsRender] = useState([]);

  const values = useMemo(() => ({
    mealsRecommendations,
    drinksRecommendations,
    recipeDetailsRender,
    setMealsRecommendations,
    setDrinksRecommendations,
    setDetailsRender,
  }), [
    mealsRecommendations,
    drinksRecommendations,
    recipeDetailsRender,
    setMealsRecommendations,
    setDrinksRecommendations,
    setDetailsRender,
  ]);

  return (
    <RecommendationsContext.Provider value={ values }>
      { children }
    </RecommendationsContext.Provider>
  );
}

RecommendationsProvider.propTypes = {}.isRequired;

export default RecommendationsProvider;
