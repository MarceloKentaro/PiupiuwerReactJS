//isso aqui é um componete e deve estar sempre com a primeira letra maiuscula
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './assets/styles/global';
import WebProvider from './hooks';
import Routes from './routes/index';



const App: React.FC = () => {
  return (
    <WebProvider>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </WebProvider>
  );
}

export default App;

/*usuário: marcelo-kentaro
senha: polijunior*/