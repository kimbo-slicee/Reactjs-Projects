import { CustomButton } from "./UI/CustomButton.jsx";
import {useState} from "react";
import IngredientList from "./IngredientList.jsx";
import {inputValidation} from "../utils/InputValidation.js";
import GenerateReceiptCard from "./GenerateReceiptCard.jsx";
export default function RecipeForm() {
    const [recipes, setRecipes] = useState([]);
    const [{valid, message}, setValidation] = useState({valid: true, message: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const recipeName = formData.get("recipeName");
        setValidation( ()=>inputValidation({input: {value: recipeName, type: 'text'}}));
        if (!valid) return;
        if(recipeName) setRecipes([...recipes, recipeName]);
        recipeName && e.target.reset();
    };

    const generateReceipt = () => {
        // Logic to generate receipt based on recipes
        console.log("Generating receipt for recipes:", recipes);
    }

    return (
        <div className="my-8 w-full content-center flex-col items-center justify-center mx-auto text-center">
            <form
                onSubmit={handleSubmit}
                className="grid grid-cols-3 gap-2 max-w-xl mx-auto p-4 w-full"
            >
                <input
                    type="text"
                    placeholder="ex: cheese"
                    name="recipeName"
                    className="col-span-2 p-3 border border-gray-300 rounded-md
                     focus:outline-none focus:ring-2 focus:ring-primary"
                />

                <CustomButton
                    type="submit"
                    className="col-span-1 btn-primary hover:btn-hover px-4 py-2"
                >
                    Add Recipe
                </CustomButton>

                {/* error under the whole form */}
                {!valid && (
                    <span className="col-span-2 text-red-500 text-sm mt-1">
                            {message}
                    </span>
                )}
            </form>

            <IngredientList ingredients={recipes} onRemove={(index) => setRecipes(recipes.filter((_, i) => i !== index))}/>
            {recipes.length >= 3 && <GenerateReceiptCard recipes={recipes} handleClick={generateReceipt}/>}
        </div>
    );
}
