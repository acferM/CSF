import React, { useState } from 'react';
import { Transition, animated } from 'react-spring/renderprops'

import { Container } from './styles'

import MoneyInput from './components/MoneyInput'
import PercentInput from './components/PercentInput'
import PopUpCard from './components/PopUpCard'

import './Global.css'

import logo from './assets/logo.svg'

const App:React.FC = () => {
  const cv = [3, 5]
  const cf = [0, 2.5]
  const icms = [7, 12]
  const [showPopUp, setShowPopUp] = useState(false)

  function handleCalculate() {
    setShowPopUp(!showPopUp)
  }

  return (
    <Container>
      <img src={logo} alt="CSF"/>

      <div className="inputs">
        <div className="inputsTxt">
          <MoneyInput title="Valor da nota" dataName="VN" />
          <MoneyInput title="Valor do frete" dataName="F" />
          <MoneyInput title="Carreteiro" dataName="CT" />
          <MoneyInput title="Carrego" dataName="CG" />
        </div>

        <div className="percentages">
          <PercentInput values={cv} title="Comissão Vendedor" dataName="CV" />
          <PercentInput values={cf} title="Custo Financeiro" dataName="CF" />
          <PercentInput values={icms} title="ICMS" dataName="I" />
        </div>
      </div>

      <div className="button" onClick={handleCalculate}>
        <div className="first">
          <span className="material-icons">
            calculate
          </span>
        </div>
        <div className="other" >
          <p>Calcular Saldo</p>
        </div>
      </div>

      <Transition
        native
        items={showPopUp}
        from={{ transform: 'scale(0)', position: 'absolute', top: 24, left: 350 }}
        enter={{ transform: 'scale(1)', position: 'absolute', top: 24, left: 350 }}
        leave={{ transform: 'scale(0)', position: 'absolute', top: 24, left: 350 }}
      >
        {show => show && (props => (
          <animated.div style={props}>
            <PopUpCard stateChanger={handleCalculate} />
          </animated.div>
        ))}
      </Transition>
    </Container>
  );
}

export default App;
