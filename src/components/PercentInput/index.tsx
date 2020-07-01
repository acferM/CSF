import React from 'react'

import { Container } from './styles'

import data from '../../data/data'

interface percentInputProps {
  values: number[]
  title: string
  dataName: 'CV'| 'CF' | 'I'
}

const PercentInput:React.FC<percentInputProps> = ({ values, title, dataName }) => {
  function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value

    switch(dataName) {
      case 'CV':
        switch(value) {
          case '3':
            data.comissaoVendedor = 3
          break

          case '5':
            data.comissaoVendedor = 5
          break
        }
      break

      case 'CF':
        switch(value) {
          case '2.5':
            data.custoFinanceiro = 2.5
          break

          case '0':
            data.custoFinanceiro = 0
          break
        }
      break

      case 'I':
        switch(value) {
          case '7':
            data.icms = 7
          break

          case '12':
            data.icms = 12
          break
        }
      break
    }
  }

  return (
    <Container>
      <p  onClick={() => values.map(value => console.log(value))}>{title}</p>
      <div id="selectDiv">
        <form id="selectForm">
          <select onChange={e => handleSelectChange(e)} >
            {
              values.map(value => (
                <option value={value}>
                  {`${value}%`}
                </option>
              ))
            }
          </select>
        </form>
      </div>
    </Container>
  )
}

export default PercentInput