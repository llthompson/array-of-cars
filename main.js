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

console.log('Sortin cars:', carsInReverse.sort())

console.log(carsInReverse.indexOf('Audi'));

const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']

const reptiles = pets.slice(4, 6);

console.log('Scaled Pets:', reptiles)

console.log('All Pets:', pets)

console.log('');

const removedReptiles = pets.splice(4, 2, 'hamster')

console.log('Reptiles Only:', removedReptiles);

console.log('Not Reptiles:', pets);

const removedPet = pets.pop()

console.log('Remove a Pet:', pets);

pets.push(removedPet);

console.log('Pet Is Back:', pets);

console.log('Shift the Pets:', pets.shift());

console.log('After Shift:', pets);

pets.unshift('turtle')

console.log('Unshift and a Turtle:', pets);
