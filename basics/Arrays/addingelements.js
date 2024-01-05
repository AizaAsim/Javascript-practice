const numbers = [3, 4]
//end
numbers.push(5, 6)
console.log(numbers)
//beginning
numbers.unshift(1, 2)
//middle
numbers.splice(9, 0, 'a', 'b')
console.log(numbers)
