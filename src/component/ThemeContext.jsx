//import React and createContext from react
import { createContext, useEffect, useState } from 'react'

// step 1: create a context for the theme
const TheamContext = createContext();

// create a ThemeProvider component
const ThemeProvider = ({children}) => { 

    // useState to manage the theme state of the application managing light and dark themes
    const [theme, setTheme] = useState("light");
    // Function to toggle the theme between light and dark
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }

    // Apply the theme to the document body
    useEffect(() => {
       if(theme === "light") {
           document.body.classList.remove("dark", "bg-gray-900", "text-white");
           document.body.classList.add("bg-white", "text-black");
       } else {
           document.body.classList.remove("bg-white", "text-black");
           document.body.classList.add("dark", "bg-gray-900", "text-white");
       }

    }, [theme]);

    return (
        // step2 : provide the theme and toggleTheme function to the context
        <TheamContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </TheamContext.Provider>
    );
};

export { TheamContext, ThemeProvider };