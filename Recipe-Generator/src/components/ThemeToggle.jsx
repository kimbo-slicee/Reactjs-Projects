import {useThemeContext} from "../context/ThemeContext.jsx";
import { SunIcon,MoonIcon } from "@heroicons/react/24/solid";
export default function ThemeToggle() {
    const { theme, themeToggle } = useThemeContext();
    return (
        <button
            onClick={themeToggle}
            className="p-2 rounded-full transition-colors duration-500 cursor-pointer"
        >
            {theme === "light" ? (
                <MoonIcon className="h-6 w-6 text-gray-900 transition-transform duration-500 rotate-0 hover:rotate-12" />
            ) : (
                <SunIcon className="h-6 w-6 text-white transition-transform duration-500 rotate-0 hover:rotate-12" />
            )}
        </button>
    );
}
