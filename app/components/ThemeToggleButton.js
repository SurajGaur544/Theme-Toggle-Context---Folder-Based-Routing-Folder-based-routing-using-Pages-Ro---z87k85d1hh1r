'use client'
import React from 'react';
import { ThemeContext } from './ThemeProvider';


const ThemeToggleButton = () => {

    const { theme, toggleTheme } = React.useContext(ThemeContext);
    
    return (
       <>
           <button onClick={toggleTheme}>
            Toggle local theme to {theme === "light" ? "dark" : "light" }</button>
       </>
    )

};
export {ThemeToggleButton}