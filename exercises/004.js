/*
Write a function called "listAllValues" which returns an array of all the input object's values.

Example input:
{
  name : 'Krysten',
  age : 33,
  hasPets : false
}

Function's return value (output):
['Krysten', 33, false]

Note that the input may have a different number of keys and values than the given sample. 

E.g. it should also handle an input like:
{
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
}

Function's return value (output):
['a', 11, true, 1]

Starter Code
*/

// MY SOLUTION
// function listAllValues(obj) {
//   let array = [];
//   for(var key in obj) {
//     array.push(obj[key])
//   }
//   return array;

// }

// EXAMPLE SOLUTION
function listAllValues(obj) {
  var returnArr = [];

  for (prop in obj) {
    returnArr.push(obj[prop])
  };

  return returnArr;
}