import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Router from "./page/router";
import { theme } from "./theme";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
    font-size: 18px;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
