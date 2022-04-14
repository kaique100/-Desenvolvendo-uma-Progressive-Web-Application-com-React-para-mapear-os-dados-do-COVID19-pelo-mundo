import React from 'react';
import { StylesProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import GlobalStyle from './commons/styles/global-style'
import Main from './containers/Main'

import Carousel from 'react-responsive-carousel';
import Carousell from "./components/Carousel";

function App() {
  return (
    <StylesProvider injectFirst>
      <Carousell />
      <CssBaseline />
      <GlobalStyle />
      <Main />
    </StylesProvider>
  );
}

export default App;
