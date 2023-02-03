import { useMemo, useState } from 'react';
import RecommendationsContext from './RecommendationsContext';

function RecommendationsProvider({ children }) {
  const [mealsRecommendations, setMealsRecommendations] = useState([]);
  const [drinksRecommendations, setDrinksRecommendations] = useState([]);

  const values = useMemo(() => ({
    mealsRecommendations,
    drinksRecommendations,
    setMealsRecommendations,
    setDrinksRecommendations,
  }), [
    mealsRecommendations,
    drinksRecommendations,
    setMealsRecommendations,
    setDrinksRecommendations,
  ]);

  return (
    <RecommendationsContext.Provider value={ values }>
      { children }
    </RecommendationsContext.Provider>
  );
}

RecommendationsProvider.propTypes = {}.isRequired;

export default RecommendationsProvider;