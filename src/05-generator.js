function* greetings() {
  yield 'hi'
  yield 'hello'
  yield 'yo'
}

const generatorGreetings = greetings()

console.log(generatorGreetings.next())
console.log(generatorGreetings.next())
console.log(generatorGreetings.next())
console.log(generatorGreetings.next())

// or

const generatorGreetingsLoop = greetings()

for (const greeting of generatorGreetingsLoop) {
  console.log(greeting, 'dude')
}
