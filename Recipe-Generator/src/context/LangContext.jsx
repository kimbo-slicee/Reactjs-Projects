import {createContext,useContext} from 'react';
const LangContext=createContext();
export function LangProvider({children}) {
    const language="en";
    return (
        <LangContext.Provider value={{language}}>
            {children}
        </LangContext.Provider>
    );
}
