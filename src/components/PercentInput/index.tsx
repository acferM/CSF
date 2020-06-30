import React from 'react'

import { Container } from './styles'

interface percentInputProps {
  values: number[]
  title: string
}

const PercentInput:React.FC<percentInputProps> = ({ values, title }) => {
  return (
    <Container>
      <p  onClick={() => values.map(value => console.log(value))}>{title}</p>
      <div id="selectDiv">
        <form id="selectForm">
          <select>
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