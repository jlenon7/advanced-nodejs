console.log('Displaying a message on the console')

console.error(new Error('Displaying error message'))

const cars = ['GM', 'FIAT', 'FORD', 'VW', 'Renault', 'Honda', 'Hyundai']

console.table(cars)

const car = {
    name: 'GM',
    year: 2020
}

console.table(car)
console.table([car, car, car])

console.count('Process')
console.count('Process')
console.count('Process')

for (let i = 1; i <= 10; i++) {
    console.count('Process')
}

console.log('Resetting process')
console.countReset('Process')

console.count('Process')

console.time('accountant')
for (let i = 1; i <= 10; i++) {
    console.log('-')
}
console.timeEnd('accountant')

// Will only be displayed if the condition failed, return false
console.assert(true, 'Do something')
console.assert(false, 'Error, value is false')

// Clear all data in console
// console.clear()
