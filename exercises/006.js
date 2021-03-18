/*
Write  a function called "convertObjectToList" which converts an object literal into an array of arrays, like this:
Argument:
{
  name: 'Holly',
  age: 35,
  role: 'producer'
}
Return value:
[['name', 'Holly'], ['age', 35], ['role', 'producer']]

Note that your function should be able to handle ANY object like this, not just the exact sample provided above.

E.g., it should also be able to handle this, or any other object containing simple key-value pairs.
{
  species: 'canine',
  name: 'Bowser',
  weight: 45
}

Starter Code:
*/

// MY SOLUTION 
// function convertObjectToList(obj) {
//   let arr = [];
// 	for (const element of Object.entries(obj)) {
//   		arr.push(element);
// 	}
//   return arr;
//  };

 // EXAMPLE SOLUTION
  function convertObjectToList(obj) {
    var returnArr = [];

    for (prop in obj) {
      var keyValueArr = [];
      
      keyValueArr.push(prop);
      keyValueArr.push(obj[prop]);
      
      returnArr.push(keyValueArr);
    }

    return returnArr;
 };