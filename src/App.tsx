import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import theme from './themes/main/theme';
import GlobalStyle from './styles/GlobalStyle';
import Login from './pages/Login/login';
import { LOGIN_URL } from './pages/Login/login.type';
import { SHOWS_LIST_URL } from './pages/Shows-List/shows-list.type';
import store from './store/store/store';
import Guard from './components/Guard/guard';
import ShowsList from './pages/Shows-List/shows-list';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path={LOGIN_URL} element={<Login />} />
            <Route path={SHOWS_LIST_URL} element={<Guard><ShowsList /></Guard>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
