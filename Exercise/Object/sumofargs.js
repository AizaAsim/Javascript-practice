//sum([1,2,3,4])=>10
function isargs (array) {
  let sum
  if (Array.isArray(array)) {
    sum = array.reduce((a, b) => a + b, 0)
    return sum
  } else {
    return false
  }
}
console.log(isargs([1, 2, 3, 4]))
