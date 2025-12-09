import {Link} from 'react-router-dom';
import {useThemeContext} from "../context/ThemeContext.jsx";

export default function NavItem() {
    /* ======= Navigation Links ======= */
    const navigation = [
        {label:"Home", link:""},
        {label:"Recipes", link:"recipes"},
        {label:"Categories", link:"categories"},
        {label:"Blog", link:"blog"},
        {label:"Contact", link:"contact"}
    ];
    const {theme}=useThemeContext();
    return (
        <ul
            className="
                hidden
                lg:flex
                lg:items-center
                lg:justify-center
                lg:space-x-6
            "
        >
            {
                navigation.map((item, i) => (
                    <li key={i}>
                        <Link
                            to={`/${item.link}`}
                            className={`
                                font-medium
                                transition
                                duration-150
                                ease-in-out
                                ${
                                    theme === "light"
                                        ? `text-gray-700 hover:text-gray-900
                                           focus:text-gray-900
                                           focus:outline-none
                                           focus:ring-2
                                           focus:ring-offset-2
                                           focus:ring-gray-500`
                                        : `text-gray-300 hover:text-white
                                           focus:text-white
                                           focus:outline-none
                                           focus:ring-2
                                           focus:ring-offset-2
                                           focus:ring-gray-400`
                                }
                                `
                                }
                        >
                            {item.label}
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
}