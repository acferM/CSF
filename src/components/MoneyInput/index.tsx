import React, { useState } from 'react'

import { Container } from './styles'

import data from '../../data/data'

interface moneyInputProps {
  title: string
  dataName: 'VN' | 'F' | 'CT' | 'CG'
}

const MoneyInput:React.FC<moneyInputProps> = ({ title, dataName }) => {
  const [value, setValue] = useState('0')

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)

    switch(dataName) {
      case 'VN':
        data.valorNota = Number(value)
      break

      case 'F':
        data.frete = Number(value)
      break

      case 'CT':
        data.carreteiro = Number(value)
      break

      case 'CG':
        data.carrego = Number(value)
      break
    }
  }

  return (
    <Container>
      <p>{title}</p>
      <div className="inputArea">
        <input type="text"
          value={value}
          onChange={e => handleInputChange(e)}
        />
      </div>
    </Container>
  )
}

export default MoneyInput