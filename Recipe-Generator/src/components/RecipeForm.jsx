import {useThemeContext} from "../context/ThemeContext.jsx";

export default function RecipeForm() {
    const {theme}=useThemeContext();
    const handelSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form action={handelSubmit} className="max-w-xl mx-auto p-4 flex justify-center w-full bg:gray-200">
          <input type="text" placeholder="ex:chese"
                 className="flex-2 p-2 border border-gray-300 rounded"
          />
            <button
                type="submit"
                className="ml-2
                flex-1 text-white p-2 bg-gray-800 cursor-pointer rounded"
            >
                Add Recipe
            </button>
        </form>
    )
}