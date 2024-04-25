/*
Array Addition I

Have the function arrayAdditionI(arr) take the array of numbers 
stored in arr and return the string true if any combination of numbers  
in the array (excluding the largest number) can be added up to equal 
the largest number in the array, otherwise return the string false. 
For example: if arr contains [4, 6, 23, 10, 3] the output should 
return true because 4 + 6 + 10 + 3 = 23. The array will not be empty,
will not contain all the same elements, and may contain negative numbers.
*/

export function arrayAdditionI(arr) {
    const theLargestNumber = Math.max(...arr);
    const arrNumbersSum = arr.reduce((accumulator, value) => accumulator + value);

    // if(arrNumbersSum - theLargestNumber === theLargestNumber) {
    //     return true 
    // } else {
    //     return false
    // }

    return arrNumbersSum - theLargestNumber === theLargestNumber; // returns boolean value
};

console.log(arrayAdditionI([4, 6, 23, 10, 3]));

