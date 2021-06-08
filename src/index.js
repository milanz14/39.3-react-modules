import { choice, remove } from './helpers';
import fruits from './fruits'

let selectedFruit = choice(fruits);
console.log(`I'd like one ${selectedFruit} please`)
console.log(`Here you go, ${selectedFruit}`)
console.log('Mmmm, delicious, may I have another?');

let remaining = remove(fruits,selectedFruit);
let howLong = remaining.length
console.log(`Sorry, we are all out of ${selectedFruit}. We have ${howLong} other fruits left which are not ${selectedFruit}`)

