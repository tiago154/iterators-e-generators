const MakeIterableObject = list => ({
  [Symbol.iterator]() {
    let index = 0
    return {
      next() {
        return index < list.length
          ? { value: list[index++], done: false }
          : { value: undefined, done: true }
      }
    }
  }
})

const list = ['Hi', 'How are you?', 'Great!']

const iterableObject = MakeIterableObject(list)[Symbol.iterator]()

console.log(iterableObject.next())
console.log(iterableObject.next())
console.log(iterableObject.next())
console.log(iterableObject.next())
