import RecipeListStore from './recipe-list.store';
import RecipeStore from './recipe.store';
import { RouterStore } from 'mobx-react-router';


const routerStore = new RouterStore();

const stores = {
    recipeList: new RecipeListStore(),
    recipe: new RecipeStore(),
    router: routerStore,
}

export default stores;
