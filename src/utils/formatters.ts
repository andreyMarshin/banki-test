const priceFormatter = new Intl.NumberFormat('ru-RU', {
  maximumFractionDigits: 0
})

export const formatPrice = (value: number) =>
  `${priceFormatter.format(value)} $`
