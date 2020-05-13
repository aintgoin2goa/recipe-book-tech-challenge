
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

const fetchAllRecipes = async () => {
    return fetchData();
}

const fetchRecipeById = async (id) => {
    const recipes = await fetchAllRecipes();
    return recipes.recipes.find(r => r.id === id);
}

module.exports = {
    fetchAllRecipes,
    fetchRecipeById
};
