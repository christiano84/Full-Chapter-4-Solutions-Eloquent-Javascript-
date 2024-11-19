/* The introduction of this book alluded to the following as a nice way to 
compute the sum of a range of numbers:

console.log(sum(range(1, 10)));

Write a range function that takes two arguments, start and end, and 
returns an array containing all the numbers from start up to and 
including end. 

/* The sum of a range */

let all = [];

function range (start, end, step = 1) {

  if (start < end) {
    for (let i = start; i <= end; i += step) 
      all.push(i);
  }
  else if (start > end) {
    for (let i = start; i >= end; i += step) 
      all.push(i);
  }
  else 
    throw new Error 
    ("Start is equal to End or something else went wrong! Check your input"); 
  
  return all;
}

range(35, -35, -5);

console.log(all);

/* Next, write a sum function that takes an array of numbers and returns 
the sum of these numbers. Run the example program and see whether it 
does indeed return 55. */

/* Sum function */
let total = [];
let theSum = 0;

function sum (arr) {
  for (let i = 0; i < arr.length; i++) 
    total.push(arr[i]);
  
  for (let num of total) 
    theSum += num;
  
  return theSum;
}

console.log(sum([1, 2, 3, 4, 5]));

/* Arrays have a reverse method that changes the array by 
inverting the order in which its elements appear. For this 
exercise, write two functions, reverseArray and 
reverseArrayInPlace. The first, reverseArray, should take an 
array as its argument and produce a new array that has the same 
elements in the inverse order. The second, reverseArrayInPlace, 
should do what the reverse method does: modify the array given 
as its argument by reversing its elements. Neither may use the 
standard reverse method. */

// Reversing an array

function reverseArray(arr) {
  let rArray = [];

  for (let i = 0; arr != ""; i++)
    rArray += arr.pop();
  return rArray;
}

let myArray = ["A", "B", "C", 1, 2, 3];

console.log(reverseArray(myArray));

// Reverse Array in place

function reverseArrayInPlace(arr) {
  // We only want to iterate through half of our array list (mLength)
  // c is a Placeholder to store a value we don't want to lose during reassignment
  let mLength = arr.length / 2;
  let c = "";

  for (let i = 0; i < mLength; i++) {
    c = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = arr[i];
    arr[i] = c;
 }

 return arr;
}

let arrayT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 17];

console.log(reverseArrayInPlace(arrayT));

/* Write a function arrayToList that builds up a list structure like 
the one shown when given [1, 2, 3] as argument. Also write a listToArray 
function that produces an array from a list. Add the helper functions prepend, 
which takes an element and a list and creates a new list that adds the element 
to the front of the input list, and nth, which takes a list and a number and 
returns the element at the given position in the list (with zero referring 
to the first element) or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth. */


function arrayToList(array){
  let list = null;
  for(let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  let arr = [];
  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

// prepend
console.log(prepend(0, list));

function prepend(element, list) {
  let newList = {value: element, rest: list};
  return newList;
}

// nth 
function nth(num, list) {
  let current = 0;

  for (let node = list; node; node = node.rest) { 
    if (current === num)
      return node.value;
    else if (current < num)
      current++;
    else
      return undefined;   
  }
}

// nthRecursive
function nthRecursive(num, list) {
  if (!list)
    return undefined;
  else if (num === 0)
    return list.value; 
  else 
    return nthRecursive(--num, list.rest);
}

console.log(listToArray(arrayToList([10, 20, 30])));
console.log(nth(2, list));
console.log(nthRecursive(2, list));

// Deep comparison

function deepEqual(i, j) {

  if (i === j) return true;
  if (i == null || typeof i != "object" || 
      j == null || typeof j != "object") return false;
    
  let keysI = Object.keys(i), keysJ = Object.keys(j);
  if (keysI.length != keysJ.length) return false;
  
  for (let key of keysI) {
    if (!keysJ.includes(key) || !deepEqual(i[key], j[key])) 
      return false;
  }
  
  return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true