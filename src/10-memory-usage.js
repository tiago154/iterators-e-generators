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

const run = async users => {
  const usersWithEmail = users.map(user => {
    return {
      ...user,
      email: buildEmail(user)
    }
  })

  await Promise.all(
    usersWithEmail.map(user => saveAnotherBank(user))
  )

  setTimeout(() => {
    process.exit()
  }, 15000)
}

run(users)
