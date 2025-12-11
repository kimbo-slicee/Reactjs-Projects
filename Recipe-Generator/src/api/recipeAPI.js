import axiosInstance from "./axiosInstance.js";

const getAllRecipes = async () => {
    try {
        return await axiosInstance.get('/recipes');
    }catch (error) {
        console.error("Error fetching all recipes:", error);
        throw error;
    }
};
const getRecipeById = async (id) => {

};
const searchRecipes = async (query) => {

}

const generateNewRecipe=(ingredients) => {


}
export { getAllRecipes, getRecipeById, searchRecipes, generateNewRecipe };
