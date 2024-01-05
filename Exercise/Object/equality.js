let address = {
  street: 'a',
  city: 'b',
  zipcode: '1a'
}
function showAddress (address) {
  for (let key in address) console.log(key, address[key])
}
showAddress(address)

function createAddress (street, city, zipcode) {
  address = {
    street,
    city,
    zipcode
  }
  return address
}
function address1a (street, city, zipcode) {
  this.street = street
  this.city = city
  this.zipcode = zipcode
}

let address1 = new address1a('a', 'b', 'c')
let address2 = new address1a('a', 'b', 'c')

function areEqual (address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipcode === address2.zipcode
  )
}
function areSame (address1, address2) {
  return address1 === address2
}
console.log(areEqual(address1, address2))
console.log(areSame(address1, address2))
