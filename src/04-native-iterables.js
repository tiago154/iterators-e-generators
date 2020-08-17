const myText = 'my text'

console.log([...myText])
console.log(Array.from(myText))

const sum = function fn() {
  return [...arguments].reduce((a, b) => a + b)
}

console.log(sum(10, 20))

for (const character of myText) {
  console.log(character)
}

for (const value of [10, 40, 50]) {
  console.log(value)
}

const textIterator = myText[Symbol.iterator]()

console.log(textIterator.next())
console.log(textIterator.next())
console.log(textIterator.next())
console.log(textIterator.next())
console.log(textIterator.next())
console.log(textIterator.next())
console.log(textIterator.next())
console.log(textIterator.next())
