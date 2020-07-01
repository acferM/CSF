import React from 'react' 

import { Container } from './styles'

import data from '../../data/data'

interface popUpProps {
  stateChanger: Function
}

const PopUpCard:React.FC<popUpProps> = ({ stateChanger }) => {
  const custoFi = data.frete * (data.custoFinanceiro / 100)
  const confins = data.frete * .035
  const comisVendedor = data.frete * (data.comissaoVendedor / 100)
  const icms = data.frete * (data.icms / 100)
  const seguro = data.valorNota * .0014

  const totDes = data.carreteiro + custoFi + confins + comisVendedor + icms + data.carrego + seguro

  return (
    <Container>
      <div className="content">
        <p className="description" >{`Total de Desconto: ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(totDes)}`}</p>
        <p className="description" style={{ marginTop: 200 }} >{`Saldo: ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(data.frete - totDes)}`}</p>
        <div className="button" onClick={() => {stateChanger()}}>
          <div className="first">
            <span className="material-icons">
              exit_to_app
            </span>
          </div>
          <div className="other" >
            <p>Nova Operação</p>
          </div>
        </div>
      </div>

    </Container>
  )
}

export default PopUpCard