import {useThemeContext} from "../context/ThemeContext.jsx";

export default function Footer() {
    const {theme}=useThemeContext();
    return (
        <footer
            className={
                `w-full fixed bottom-0 py-4 text-center ${
                    theme === "light"
                        ? "bg-white text-gray-800"
                        : "bg-gray-950 text-white"
                    
                }`
            }
        >
            <p>© 2024 My Recipe App. All rights reserved.</p>
        </footer>
    )
}