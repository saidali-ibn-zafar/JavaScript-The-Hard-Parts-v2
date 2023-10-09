// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

// Challenge 2
function addS(word) {
  return word + "s";
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(callback(array[i]));
  }
  return output;
}

// const multiplyBy2 = input => input * 2;

console.log(map([1, 2, 3], (input) => input * 2));

// Challenge 4
function forEach(array, callback) {
	for(let i = 0; i < array.length; i++){
    callback(array[i], i, array);
  }
}

const logElements = (element, index, array) => {
	console.log(`At index ${index} is ${element}.`)
}

// forEach([1,2,3,4,5], logElements);

// see for yourself if your forEach works!


// Challenge 5
function mapWith(array, callback) {
	const result = [];
  forEach(array, (element)=>{
		result.push(callback(element))
  });
  return result;
}

const mappedArr = mapWith([2, 4, 6], multiplyBy2);
console.log(mappedArr);

// Challenge 6
function reduce(array, callback, initialValue) {
	let accumulator = initialValue;
  for(let i = 0; i < array.length; i++){
		accumulator = callback(accumulator, array[i]);
  }
  
  return accumulator;
}

const arr = [1,3,5];
const add = (a, b) => {return a + b;}

const result = reduce(arr, add, 0);
console.log(result);

