import {useNavigate} from "react-router-dom";
import {ArrowRightStartOnRectangleIcon} from "@heroicons/react/24/outline/index.js";
import {useThemeContext} from "../context/ThemeContext.jsx";

export default function LoginButton() {
    const {theme}=useThemeContext();
    const navigateToLogin = useNavigate();
    return (
            <button
                className={
                    `flex items-center 
                    gap-2 px-4 py-2 border 
                    rounded-md font-medium transition-colors duration-300 cursor-pointer ${
                        theme === "light"
                            ? "bg-gray-800 text-gray-50 border-gray-600 hover:bg-gray-700"
                            : "bg-white text-gray-950 border-gray-300 hover:bg-gray-100"
                    }`
                }
                onClick={() => navigateToLogin('/login')}
            >
                <span className="leading-none">Login</span>
                <ArrowRightStartOnRectangleIcon className="h-5 w-5"/>
            </button>

    )
}