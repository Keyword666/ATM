
function isNumber(num) {
  return +num === num
}

function mySort(list) {
  const flatList = list.flat(Infinity)

  const filterList = flatList.filter(element => isNumber(element))

  const setList = [...new Set(filterList)]

  return setList.sort((a, b) => a - b)
}

function add(a, b) {
  return a + b
}

export { isNumber, mySort }