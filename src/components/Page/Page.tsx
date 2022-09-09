import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Container } from './Page.styles';
import GlobalStyle from '../../config/GlobalStyle';
import { lightTheme, darkTheme } from '../../config/theme';
import Header from '../Header';
import Routes from '../../router/routes';
import SideBar from '../SideBar/SideBar';

const Page: React.FC = () => {
  const [theme] = React.useState('light');
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Container>
          <Header />
          <main>
            <Routes />
          </main>
        </Container>
      </BrowserRouter>
      <SideBar />
    </ThemeProvider>
  );
};

export default Page;
