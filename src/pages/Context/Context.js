import { useState, createContext } from "react";
import Content from "./Content";

const ThemeContext = createContext();
console.log('ThemeContext :',ThemeContext);


function Context() {
  //Context
  //1. Create context
  //2. Provider
  //3. Consumer
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={theme}>
    <div className="App" style={{padding: 32}}>
         <button onClick={() => toggleTheme()}>Toggle theme</button>
      <Content theme={theme}/>
    </div>
    </ThemeContext.Provider>

    
  );
}

export default Context;
