import {XMarkIcon} from "@heroicons/react/16/solid/index.js";
export default function IngredientList({ingredients,onRemove}) {

    return (
        <div className="max-w-xl mx-auto p-4 container md:w-2/3 sm:w-full sm:px-2 sm:py-4">
            <ul className="list-none flex flex-wrap justify-center gap-3
            ">
                {ingredients.map((ingredient, index) => (
                    <li key={index} className="bg-primary rounded-2xl py-2 px-3 text-gray-950 mx-1 my-1">
                        <button className="flex items-center justify-center font-medium capitalize">
                            <span className="text-primary font-medium text-lg capitalize">{ingredient}</span>
                            <XMarkIcon
                                className="h-4 w-5 text-primary cursor-pointer ml-1"
                                onClick={()=>onRemove(index)}
                            />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );

}