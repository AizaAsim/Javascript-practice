const numbers = [1, 2, 3, 4]
numbers.indexOf('a') //you will get -1 because inside the array it doesnot existss
console.log(numbers.indexOf('1'))
console.log(numbers.lastIndexOf(3)) //you will get 2 bcoz at the last index of 3 it is 2
console.log(numbers.indexOf(1) !== -1) //if this is true it means that the element exist inside the Array;
console.log(numbers.includes(1))
