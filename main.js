const cars = ['Mazda', 'Jeep', 'Hyundai', 'Ford'];

console.log('Cars:', cars);

console.log('Length of Cars:', cars.length);

const moreCars = ['Toyota', 'Nissan', 'Audi', 'Honda']

const totalCars = cars.concat(moreCars)

console.log('Total Cars:', totalCars)

console.log('Index of Honda:', totalCars.indexOf('Honda'))

console.log('Last Index of Ford:', totalCars.lastIndexOf('Ford'))

const stringOfCars = totalCars.join()

console.log('A String of Cars:', stringOfCars)

const carsFromString = stringOfCars.split(',')

console.log('Cars from a String:', carsFromString)

const carsInReverse = totalCars.reverse()

console.log('Cars are going backwards:', carsInReverse)
