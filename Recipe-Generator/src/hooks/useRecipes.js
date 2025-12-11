import { useState, useEffect } from "react";
import {getRecipesService,generateRecipe} from "../services/recipe.service.js";

export default function useRecipes() {
    // useRecipes hook to manage recipe data within a React component
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchRecipes=getRecipesService();
    const createNewRecipe=generateRecipe();




}
