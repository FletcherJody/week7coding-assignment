// 1. 
// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
// ----Do not use numbers to reference the last element, find it programmatically.
// ----ages[7] - ages[0] is not allowed!
// b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
// c. Use a loop to iterate through the array and calculate the average age.
console.log("1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93");
// ----------------------------------------------------------------------------------
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("     1. array: " + ages);

let difference = ages[ages.length - 1] - ages[0];
console.log("     1a. subtract 1st element from last element in ages: " + difference);

ages.push(65);
console.log("     1b. added age to array without directly entering the age, pushed instead " + ages);
let newDifference = ages[ages.length - 1] - ages[0];
console.log("     1b. check that operation works for arrays of different lenths: " + newDifference);

let sum = 0;
for (let i = 0; i < ages.length; i++)
    sum += ages[i];//for loop gets sum of all ages, including the age that I pushed in
console.log("     1c. use a loop to calculate avg age: " + Math.ceil(sum / ages.length));//used Math.ceil to go to next higher number and remove extra digits after decimal since answer was higher than 32
console.log("------------------------------");
// ---------------------------------------------------------------------------------

// 2.
// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
// a. Use a loop to iterate through the array and calculate the average number of letters per name.
// b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
console.log("2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.")
// ------------------------------------------------------------------------------------
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log("     2. array: " + names);

let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
const avgLetters = totalLetters / names.length;
console.log("     2a. average number of letters per name: " + avgLetters);

let concatNames = ' ';
for (let i = 0; i < names.length; i++) {
    concatNames += names[i];
    concatNames += ' ';
}
console.log("     2b. concatenated names separated by spaces: " + concatNames);
console.log("------------------------------");

// 3. 
// How do you access the last element of any array?
console.log("3. How do you access the last element of any array?");
console.log("     3. The last element of any array is array.[array.length - 1] ");
console.log("------------------------------");
// -----------------------------------------------------------------------

// 4.
// How do you access the first element of any array?
console.log("4. How do you access the first element of any array?");
console.log("     4. The first element of any array is array[0].");
console.log("------------------------------");
// ---------------------------------------------------------------------------

// 5.
// Create a new array called nameLengths. 
// ----a. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array
console.log("5. Create a new array called nameLengths.");
// ---------------------------------------------------------------------------
let names2 = ["Kelly", "Sam", "Kate"];
let nameLengths = [];
for (let i = 0; i < names2.length; i++) {
    nameLengths.push(names2[i].length);
}
console.log("     5a. add length of each name to array: " + nameLengths);
console.log("------------------------------");

// 6.
// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
console.log("6. Write a loop that calculates the sum of the nameLengths array.")
// -------------------------------------------------------------------------------
let sumLetters = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sumLetters += nameLengths[i];
};
console.log("     6. the sum of the nameLengths array is: " + sumLetters);

// 7.
// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
// --(i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
// -------------------------------------------------------------------------------

// 8.
// Write a function that takes two parameters, firstName and lastName, and returns a full name. 
// ----The full name should be the first and the last name separated by a space.
// ---------------------------------------------------------------------------------

// 9.
// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
// -------------------------------------------------------------------------------------

// 10.
// Write a function that takes an array of numbers and returns the average of all the elements in the array.
// ------------------------------------------------------------------------------------

// 11.
// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
// ---------------------------------------------------------------------------------------

// 12.
// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
// 

// 13.
// Create a function of your own that solves a problem. 
// ----In comments, write what the function does and why you created it.