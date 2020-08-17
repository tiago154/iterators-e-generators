import Benchmark from 'benchmark'
const suite = new Benchmark.Suite()

const fibonacci = n => {
  let current = 0
  let next = 1
  let swap

  for (let index = 0; index < n; index++) {
    swap = current
    current = next
    next = swap + next
  }

  return current
}

function* fibonacciGenerator(n) {
  let current = 0
  let next = 1
  let swap

  for (let index = 0; index < n; index++) {
    swap = current
    current = next
    next = swap + next
    yield current
  }
}

suite
  .add('common function', () => {
    fibonacci(5000)
  })
  .add('generator function', () => {
    for (const _ of fibonacciGenerator(5000)) {

    }
  })
  .on('cycle', (event) => {
    console.log(event.target.toString())
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })
