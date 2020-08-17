import fs from 'fs'
import path from 'path'
import { first, last, middle } from 'random-name'

const filePath = path.join(__dirname, 'data.json')

const writeStream = fs.createWriteStream(filePath)

writeStream.write('[ \n  ')

const quantityUsers = Number(process.argv[2]) || 1000

for (let index = 0; index < quantityUsers; index++) {
  const user = {
    firstName: first(),
    lastName: last(),
    company: middle()
  }

  const lastCharacter = (index + 1) < quantityUsers ? ',' : '\n'

  writeStream.write(JSON.stringify(user) + lastCharacter)
}

writeStream.write(']')
