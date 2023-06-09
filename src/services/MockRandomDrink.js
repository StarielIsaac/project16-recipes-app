// const mockItens = {
//   favs:
//   [
//     {
//       idDrink: '178329',
//       strDrink: 'Captain Kidd\'s Punch',
//       strDrinkAlternate: null,
//       strTags: null,
//       strVideo: null,
//       strCategory: 'Cocktail',
//       strIBA: null,
//       strAlcoholic: 'Alcoholic',
//       strGlass: 'Collins glass',
//       strInstructions: `Mix all ingredients together in a shaker and strain into
//    a collins glass. Use Caribbean dark Rum for a sweeter taste.`,
//       strInstructionsES: null,
//       strInstructionsDE: null,
//       strInstructionsFR: null,
//       strInstructionsIT: `Mescolare tutti gli ingredienti insieme in
//    uno shaker e filtrare in un bicchiere Collins. Usa rum scuro
//     caraibico per un gusto pi\u00f9 dolce.`,
//       'strInstructionsZH-HANS': null,
//       'strInstructionsZH-HANT': null,
//       strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/d83spj1596017390.jpg',
//       strIngredient1: 'Rum',
//       strIngredient2: 'Lime Juice',
//       strIngredient3: 'Egg White',
//       strIngredient4: 'Bitters',
//       strIngredient5: 'Sugar',
//       strIngredient6: 'Nutmeg',
//       strIngredient7: null,
//       strIngredient8: null,
//       strIngredient9: null,
//       strIngredient10: null,
//       strIngredient11: null,
//       strIngredient12: null,
//       strIngredient13: null,
//       strIngredient14: null,
//       strIngredient15: null,
//       strMeasure1: '2 shots',
//       strMeasure2: '1 shot',
//       strMeasure3: '1 shot',
//       strMeasure4: '1 dash',
//       strMeasure5: 'Ground',
//       strMeasure6: 'Top',
//       strMeasure7: '',
//       strMeasure8: null,
//       strMeasure9: null,
//       strMeasure10: null,
//       strMeasure11: null,
//       strMeasure12: null,
//       strMeasure13: null,
//       strMeasure14: null,
//       strMeasure15: null,
//       strImageSource: null,
//       strImageAttribution: null,
//       strCreativeCommonsConfirmed: 'Yes',
//       dateModified: null,
//     },
//     {
//       idDrink: '178311',
//       strDrink: 'Broadside',
//       strDrinkAlternate: null,
//       strTags: null,
//       strVideo: null,
//       strCategory: 'Cocktail',
//       strIBA: null,
//       strAlcoholic: 'Alcoholic',
//       strGlass: 'Highball glass',
//       strInstructions:
//     `Half fill the glass with ice cubes.
//      Crush the wormwood and add to ice.
//      Pour rum, scotch and butters, then serve!`,
//       strInstructionsES: null,
//       strInstructionsDE: null,
//       strInstructionsFR: null,
//       strInstructionsIT:
//     `Riempire a metà il bicchiere con cubetti di ghiaccio.
//      Schiacciare l'assenzio e aggiungerlo al ghiaccio.
//      Versare rum, scotch e burro, quindi servire!`,
//       'strInstructionsZH-HANS': null,
//       'strInstructionsZH-HANT': null,
//       strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/l2o6xu1582476870.jpg',
//       strIngredient1: '151 proof rum',
//       strIngredient2: 'Scotch',
//       strIngredient3: 'Bitters',
//       strIngredient4: 'Wormwood',
//       strIngredient5: 'Ice',
//       strIngredient6: null,
//       strIngredient7: null,
//       strIngredient8: null,
//       strIngredient9: null,
//       strIngredient10: null,
//       strIngredient11: null,
//       strIngredient12: null,
//       strIngredient13: null,
//       strIngredient14: null,
//       strIngredient15: null,
//       strMeasure1: '1 shot',
//       strMeasure2: '1/2 shot',
//       strMeasure3: '3 drops',
//       strMeasure4: '1 Fresh',
//       strMeasure5: 'cubes',
//       strMeasure6: '',
//       strMeasure7: '',
//       strMeasure8: null,
//       strMeasure9: null,
//       strMeasure10: null,
//       strMeasure11: null,
//       strMeasure12: null,
//       strMeasure13: null,
//       strMeasure14: null,
//       strMeasure15: null,
//       strImageSource: null,
//       strImageAttribution: null,
//       strCreativeCommonsConfirmed: 'Yes',
//       dateModified: null,
//     },
//     {
//       idDrink: '12518',
//       strDrink: 'Whisky Mac',
//       strDrinkAlternate: null,
//       strTags: null,
//       strVideo: null,
//       strCategory: 'Ordinary Drink',
//       strIBA: null,
//       strAlcoholic: 'Alcoholic',
//       strGlass: 'Collins Glass',
//       strInstructions: 'Pour both of the ingredients into a wine goblet with no ice.',
//       strInstructionsES: null,
//       strInstructionsDE: 'Beide Zutaten in einen Weinkelch geben, ohne Eis.',
//       strInstructionsFR: null,
//       strInstructionsIT: `Versare entrambi gli ingredienti in un calice da
//      vino senza ghiaccio.`,
//       // 'strInstructionsZH-HANS: null,
//       // 'strInstructionsZH-HANT': null,
//       strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/yvvwys1461867858.jpg',
//       strIngredient1: 'Scotch',
//       strIngredient2: 'Wine',
//       strIngredient3: null,
//       strIngredient4: null,
//       strIngredient5: null,
//       strIngredient6: null,
//       strIngredient7: null,
//       strIngredient8: null,
//       strIngredient9: null,
//       strIngredient10: null,
//       strIngredient11: null,
//       strIngredient12: null,
//       strIngredient13: null,
//       strIngredient14: null,
//       strIngredient15: null,
//       strMeasure1: '1 1/2 oz ',
//       strMeasure2: '1 oz Green Ginger ',
//       strMeasure3: null,
//       strMeasure4: null,
//       strMeasure5: null,
//       strMeasure6: null,
//       strMeasure7: null,
//       strMeasure8: null,
//       strMeasure9: null,
//       strMeasure10: null,
//       strMeasure11: null,
//       strMeasure12: null,
//       strMeasure13: null,
//       strMeasure14: null,
//       strMeasure15: null,
//       strImageSource: null,
//       strImageAttribution: null,
//       strCreativeCommonsConfirmed: 'No',
//       dateModified: '2016-04-28 19:24:18',
//     },
//     {
//       idMeal: '52998',
//       strMeal: 'Corned Beef and Cabbage',
//       strDrinkAlternate: null,
//       strCategory: 'Beef',
//       strArea: 'Irish',
//       strInstructions: `1\r\n\r\nPlace corned beef in large
//         pot or Dutch oven and cover with water.
//         Add the spice packet that came with the corned beef.
//         Cover pot and bring to a boil, then reduce to a simmer.
//         Simmer approximately 50 minutes per pound or until tender.
//         \r\n\r\n2\r\n\r\nAdd whole potatoes and peeled and cut carrots,
//         and cook until the vegetables are almost tender.
//         Add cabbage and cook for 15 more minutes.
//         Remove meat and let rest 15 minutes.
//         \r\n\r\n3\r\n\r\nPlace vegetables in a bowl and cover.
//         Add as much broth (cooking liquid reserved in the Dutch oven or large pot)
//         as you want. Slice meat across the grain."`,
//       strMealThumb: 'https://www.themealdb.com/images/media/meals/xb97a81583266727.jpg',
//       strTags: '',
//       strYoutube: '',
//       strIngredient1: 'Beef Brisket',
//       strIngredient2: 'Small Potatoes',
//       strIngredient3: 'Carrots',
//       strIngredient4: 'Cabbage',
//       strMeasure1: '3 Lbs',
//       strMeasure2: '10',
//       strMeasure3: '5',
//       strMeasure4: '1 head',
//       strSource: '',
//       strImageSource: null,
//       strCreativeCommonsConfirmed: null,
//       dateModified: null,
//     },
//   ],
// };

// const newMock = mockItens.favs.map(({ idDrink, idMeal, strMeal, strMealThumb,
//   strCategory, strAlcoholic, strDrink, strArea, strDrinkThumb }) => {
//   if (strDrink) {
//     return {
//       id: idDrink,
//       type: 'Drink',
//       category: strCategory,
//       alcoholicOrNot: strAlcoholic,
//       name: strDrink,
//       image: strDrinkThumb,
//     };
//   }
//   return {
//     id: idMeal,
//     type: 'Meal',
//     nationality: strArea,
//     category: strCategory,
//     name: strMeal,
//     image: strMealThumb,
//   };
// });

// // localStorage.clear();
// localStorage.setItem('favoriteRecipes', JSON.stringify(newMock));

// export default newMock;
