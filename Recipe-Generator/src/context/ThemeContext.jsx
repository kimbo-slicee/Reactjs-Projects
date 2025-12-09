import { createContext, useContext, useState, useEffect, useCallback } from "react";

// Create the context with default values
const ThemeContext = createContext({
    theme: "light",
    themeToggle: () => {},
});

export function ThemeProvider({ children }) {
    // Lazy initializer to get the initial theme
    const getInitialTheme = () => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) return storedTheme;
        return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };

    const [theme, setTheme] = useState(getInitialTheme);

    // Update localStorage and HTML data attribute whenever theme changes
    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    // Memoized toggle function
    const themeToggle = useCallback(() => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, themeToggle }}>
            {children}
        </ThemeContext.Provider>
    );
}

// Custom hook for easier usage
export function useThemeContext() {
    return useContext(ThemeContext);
}
