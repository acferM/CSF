

interface dataProps {
  valorNota: number
  frete: number
  carreteiro: number
  carrego: number
  comissaoVendedor: 3 | 5
  custoFinanceiro: 2.5 | 0
  icms: 7 | 12
  showPopUp: boolean
}

const data:dataProps = {
  valorNota: 0,
  frete: 0,
  carreteiro: 0,
  carrego: 0,
  comissaoVendedor: 3,
  custoFinanceiro: 0,
  icms: 7,
  showPopUp: false
}

export default data