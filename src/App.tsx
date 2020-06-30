import React from 'react';
import {} from 'react-icons/fi'

import { Container } from './styles'

import MoneyInput from './components/MoneyInput'
import PercentInput from './components/PercentInput'

import './Global.css'

import logo from './assets/logo.svg'

const App:React.FC = () => {
  const cv = [3, 5]
  const cf = [0, 2.5]
  const icms = [7, 12]

  return (
    <Container>
      <img src={logo} alt="CSF"/>

      <div className="inputs">
        <div className="inputsTxt">
          <MoneyInput title="Valor da nota" />
          <MoneyInput title="Valor do frete" />
          <MoneyInput title="Carreteiro" />
          <MoneyInput title="Carrego" />
        </div>

        <div className="percentages">
          <PercentInput values={cv} title="Comissão Vendedor" />
          <PercentInput values={cf} title="Custo Financeiro" />
          <PercentInput values={icms} title="ICMS" />
        </div>
      </div>

      <div className="button">
        <div className="first">
          <span className="material-icons">
            calculate
          </span>
        </div>
        <div className="other" >
          <p>Calcular Saldo</p>
        </div>
      </div>
    </Container>
  );
}

export default App;
