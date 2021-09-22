const meses = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
]

const simpleDate = (date: Date): string => {
  const now = new Date()

  let res = date.getUTCDate() + ' de ' + meses[date.getUTCMonth()]
  if (date.getUTCFullYear() !== now.getUTCFullYear())
    res += ' de ' + date.getUTCFullYear()

  return res
}

export default simpleDate
