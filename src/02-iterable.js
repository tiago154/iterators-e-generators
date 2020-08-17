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

const iterableObject = MakeIterableObject(['Hi', 'How are you?', 'Great!'])

for (const item of iterableObject) console.log(item)

console.log(...iterableObject)
console.log(Array.from(iterableObject))
