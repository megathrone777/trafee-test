import React from "react";
import { NotificationsProvider } from "reapop";

import { Header } from "../Header";
import { Footer } from "../Footer";
import { SmartLinks } from "../SmartLinks";
import { GlobalStyle } from "~/theme/global-style";
import { theme, ThemeProvider } from "~/theme";
import { StyledWrapper } from "./styled";
import { MainProvider } from "~/store";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainProvider>
        <NotificationsProvider>
          <StyledWrapper>
            <Header />
            <SmartLinks />
            <Footer />
          </StyledWrapper>
        </NotificationsProvider>
      </MainProvider>
    </ThemeProvider>
  );
};

export { App };
