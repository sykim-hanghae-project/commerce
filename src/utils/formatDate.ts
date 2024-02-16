function formatDate(date: Date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return `${year}.${formatToTwoDigit(month)}.${formatToTwoDigit(day)}`
}

function formatToTwoDigit(number: number) {
  return ("0" + number.toString()).slice(-2)
}

export default formatDate