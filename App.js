import React from "react";
import { ThemeProvider } from "./src/context/ThemeContext";
import AppContainer from "./src/AppContainer";

const App = () => {
  return (
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  );
};

export default App;
