import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import theme from './themes/main/theme';
import GlobalStyle from './styles/GlobalStyle';
import Login from './pages/Login/login';
import MoviesList from './pages/Movies-List/movies-list';
import { LOGIN_URL } from './pages/Login/login.type';
import { MOVIES_LIST_URL } from './pages/Movies-List/movies-list.type';
import store from './store/store/store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path={LOGIN_URL} element={<Login />} />
            <Route path={MOVIES_LIST_URL} element={<MoviesList />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
