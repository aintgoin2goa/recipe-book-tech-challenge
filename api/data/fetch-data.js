
const data = {
    recipes: require('./recipes.json'),
    oneRecipe: require('./one-recipe.json'),
    noRecipes: require('./no-recipes.json')
};

/**
 * A cheating way of enabling different sorts of data to test the UI responds appropiately
 */
const fetchData = () => {
    const name = process.env.DATASOURCE || 'recipes';
    return data[name];
}

module.exports = fetchData;
