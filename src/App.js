import React from 'react';
import { IconStyle } from './assets/iconfont/iconfont';
import { GlobalStyle } from './style';
import routes from './routes';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

function App() {
  return (
    <HashRouter>
      <GlobalStyle></GlobalStyle>
      <IconStyle></IconStyle>
      { renderRoutes(routes) }
    </HashRouter>
  );
}

export default App;
