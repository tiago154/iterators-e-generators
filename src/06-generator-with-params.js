function* channel() {
  const name = yield 'hello, what is your name?'
  return `very welcome ${name}`
}

const lobby = channel()

console.log(lobby.next().value)
console.log(lobby.next('Tiago').value)
