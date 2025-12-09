import { ThemeProvider } from "./ThemeContext";
import { AuthProvider } from "./AuthContext";
import { LangProvider } from "./LangContext";

export function AppProviders({ children }) {
    return (
        <AuthProvider>
            <ThemeProvider>
                <LangProvider>
                    {children}
                </LangProvider>
            </ThemeProvider>
        </AuthProvider>
    );
}
