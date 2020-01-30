import React, { useContext, createContext, useState } from 'react';


export const ThemeContext = createContext({
    theme: 'white',
});


export const ThemeProvider = props => {
    const themeContext = useContext(ThemeContext);
    const [theme, setTheme] = useState(themeContext.theme);
    const provider = {
        theme,
        setTheme: selectedTheme => {
            return setTheme(selectedTheme);
        }
    }

return(
    <ThemeContext.Provider value={provider}>
        {props.children}
    </ThemeContext.Provider>
 )
}