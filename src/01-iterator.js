const makeIterator = list => {
  let index = 0
  return {
    next: () => index < list.length
      ? { value: list[index++], done: false }
      : { value: undefined, done: true }
  }
}

const iterator = makeIterator([1, 2, 3, 4])

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
