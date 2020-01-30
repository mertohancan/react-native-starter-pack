import React, {useContext} from 'react';
import {ThemeProvider, ThemeContext} from './src/context/ThemeContext';
import AppContainer from './src/AppContainer';




const App = () => {
  return(
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  )
}

export default App;