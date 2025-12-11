import {getAllRecipes} from "../api/recipeAPI.js";
import {handlePagination} from "../utils/handlePagination.js";

const getRecipesService = async ()=>{
    // Fetch all recipes from the API using the getAllRecipes function and Pagination if needed
    const {data}=await getAllRecipes();
    handlePagination(data);
    return data;
}
const generateRecipe = async (recipe) => {
    // Logic to Generate a new recipe
}
export {getRecipesService,generateRecipe};