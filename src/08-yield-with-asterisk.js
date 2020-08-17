function* lunch(name) {
  yield* ['Hey dude', 'Everything beauty?']
  yield `So my brother ${name} let's have lunch?`
}

const generatorLunch = lunch('Carl')

for (const lunch of generatorLunch) {
  console.log(lunch)
}
