import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { fetchDetailsDrinks, fetchDetailstMeals } from '../services/ApiRecipeDetails';

function RecipeDetails(props) {
  const { match: { params: { id } } } = props;
  const { history } = props;
  const fetchDetails = async () => {
    let byCategories;
    if (history.location.pathname.includes('/meals/')) {
      byCategories = await fetchDetailstMeals(id);
    }
    if (history.location.pathname.includes('/drinks/')) {
      byCategories = await fetchDetailsDrinks(id);
    }
    console.log(byCategories);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div>RecipeDetails</div>
  );
}

RecipeDetails.propTypes = {}.isRequired;

export default withRouter(RecipeDetails);
