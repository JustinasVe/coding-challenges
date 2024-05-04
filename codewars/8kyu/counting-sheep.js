/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example:
[true, true, false, false, true]

The correct answer would be 3.
Hint: Don't forget to check for bad values like null/undefined
*/

export const countSheeps = (arrayOfSheeps) => {
    return arrayOfSheeps.filter(item => Boolean(item)).length
};

// Another way to solve it:

// export const countSheeps = (arrayOfSheeps) => {
    
//     let num = 0;

//     for(let i = 0; i < arrayOfSheeps.length; i++) {
//         if (arrayOfSheeps[i] === true) {
//             num++
//         }
//     }
//     return num;
// }
