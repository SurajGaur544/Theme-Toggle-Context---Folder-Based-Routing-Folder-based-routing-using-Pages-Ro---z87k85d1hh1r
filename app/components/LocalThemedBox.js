'use client'
import React from 'react';
import { ThemeContext } from './ThemeProvider';


const LocalThemedBox = () => {

    const { theme } = React.useContext(ThemeContext);
    const [localTheme, setLocalTheme] = React.useState(theme);
    React.useEffect(() => {
        setLocalTheme(theme);
    }, [theme]);

return(
    <div className={`bg-${localTheme}`}
    style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box">
        {/* Write code below this line */}
        <button onClick={() => {
                setLocalTheme(localTheme === "light" ? "dark" : "light");
            }}>
            Toggle local theme to {localTheme === "light" ? "dark" : "light"}
        </button>
    </div>
)
}

export { LocalThemedBox }