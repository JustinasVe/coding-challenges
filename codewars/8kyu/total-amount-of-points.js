/*
 Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

- if x > y: 3 points (win)
- if x < y: 0 points (loss)
- if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

- our team always plays 10 matches in the championship
- 0 <= x <= 4
- 0 <= y <= 4
 */

//First solution:
export function points(gamesArray) {
  let numberOfPoints = 0;

  gamesArray.forEach((game) => {
    // "3:1" game[0] = 3   game[1] = :   game[2] = 1
    if (game[0] > game[2]) {
      numberOfPoints = numberOfPoints + 3;
    } else if (game[0] === game[2]) {
      numberOfPoints += 1;
    }
  });

  return numberOfPoints;
}

console.log(points(["3:1", "3:1"]))

//Second solution:
// function points(gamesArray) {
//     let numberOfPoints = 0;
    
//     for (let i = 0; i < gamesArray.length; i++) {
      
//       // Sample value "3:1"
//       const value = gamesArray[i];
      
//       const parts = value.split(":");
      
//       const x = parts[0];
//       const y = parts[1];
      
//       if (x > y) {
//         numberOfPoints = numberOfPoints + 3;
//       } else if (x === y) {
//         numberOfPoints += 1;
//       }
//     }
  
//     return numberOfPoints;
//   };
