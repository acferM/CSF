import React from 'react';

import { Container } from './styles'

import MoneyInput from './components/MoneyInput'

import './Global.css'

import logo from './assets/logo.svg'

const App:React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="CSF"/>

      <div className="inputs">
        <MoneyInput title="Valor da nota" />
        <MoneyInput title="Valor do frete" />
        <MoneyInput title="Carreteiro" />
        <MoneyInput title="Carrego" />
      </div>
    </Container>
  );
}

export default App;
