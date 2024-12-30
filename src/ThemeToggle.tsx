import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme, darkTheme } from "./theme"; 

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev); 
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
      <div>
        <button onClick={toggleTheme}>
          {isDarkMode ? "Light" : "Dark"}
        </button>
      </div>
    </ThemeProvider>
  );
};

export default ThemeToggle;
