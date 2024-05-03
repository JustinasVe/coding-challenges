/*
Complete the solution so that it reverses the string passed into it.

For example: 
'world'  =>  'dlrow'
'word'   =>  'drow'
*/

export function reversedString(str) {
  return str.split("").reverse().join("");
}
