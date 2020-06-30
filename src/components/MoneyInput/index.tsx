import React, { useState } from 'react'

import { Container } from './styles'

interface moneyInputProps {
  title: string
}

const MoneyInput:React.FC<moneyInputProps> = ({ title }) => {
  const [value, setValue] = useState('0')

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
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