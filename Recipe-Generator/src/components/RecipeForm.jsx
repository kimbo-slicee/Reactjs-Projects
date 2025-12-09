import { CustomButton } from "./UI/CustomButton.jsx";

export default function RecipeForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your logic here
        console.log("Recipe submitted!");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto p-4 flex justify-center w-full md:w-2/3 sm:w-full sm:px-2 sm:py-4"
        >
            <input
                type="text"
                placeholder="ex: cheese"
                className="flex-1 p-2 border border-gray-300 rounded-md
                           focus:outline-none focus:ring-2 focus:ring-primary
                           focus:border-transparent transition-colors duration-300"


            />

            <CustomButton
                type="submit"
                className="ml-2 btn-primary hover:btn-hover px-4 py-2"
            >
                Add Recipe
            </CustomButton>
        </form>
    );
}
