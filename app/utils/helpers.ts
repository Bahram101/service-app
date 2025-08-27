export const getSurnameAndName = (fullName: string | undefined) => {
  return fullName?.trim().split(/\s+/).slice(0, 2).join(' ')
}

// export const formatMoney = (value: number): string => {
//   return new Intl.NumberFormat('ru-RU').format(value) + ' ₸'
// }

export const formatCurrency = (value: number, symbol: string = '₸'): string => {
  if (value == null || isNaN(value)) return `0 ${symbol}`

  return value.toLocaleString('ru-RU') + ` ${symbol}`
}
