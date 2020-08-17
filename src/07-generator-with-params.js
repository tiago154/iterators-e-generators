import { first } from 'random-name'

const getRandomElement = list =>
  list[Math.floor(Math.random() * list.length)]

const makeMonster = () => {
  const monsterSizes = [
    'Tiny',
    'Small',
    'Medium',
    'Large',
    'Huge',
    'Gargantuan'
  ]
  const monsterAbilities = [
    'Fly',
    'Earthquake',
    'Control Time',
    'Invisibility',
    'Telepathy'
  ]
  return {
    name: first(),
    size: getRandomElement(monsterSizes),
    ability: getRandomElement(monsterAbilities)
  }
}

function* generatorMonster(limit) {
  let stopGenerate = false
  while (limit > 0) {
    stopGenerate = yield makeMonster()
    if (stopGenerate) return
    limit--
  }
}

const monsters = generatorMonster(3)

for (const monster of monsters) {
  console.log(monster)
}

// or

const monstersWithStop = generatorMonster(3)

console.log(monstersWithStop.next())
console.log(monstersWithStop.next(true))
console.log(monstersWithStop.next())
