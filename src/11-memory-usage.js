import users from './mock/data.json'

const showUsageMemory = () => {
  const used = process.memoryUsage().heapUsed / 1024 / 1024
  console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`)
}

setInterval(() => {
  showUsageMemory()
}, 2000)

const buildEmail = ({ firstName, lastName, company }) =>
  `${firstName}.${lastName}@${company}.com`

const saveAnotherBank = _user =>
  new Promise((resolve) => setTimeout(() => resolve('Ok'), 120))

function* chunkGenerator(list, chunk) {
  let cursor = 0
  const totalLength = list.length
  while (cursor < totalLength) {
    yield list.slice(cursor, cursor + chunk)
    cursor += chunk
  }
}

const run = async users => {
  const generator = chunkGenerator(users, 20000)

  for (const chunks of generator) {
    const usersWithEmail = chunks.map(user => {
      return {
        ...user,
        email: buildEmail(user)
      }
    })

    await Promise.all(
      usersWithEmail.map(user => saveAnotherBank(user))
    )
  }

  setTimeout(() => {
    process.exit()
  }, 15000)
}

run(users)
