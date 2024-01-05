function walk () {
  console.log('walk')
}
let run = function () {
  console.log('run')
}
let x = 1
let run1 = run
console.log(run1)
let move = run
move()
