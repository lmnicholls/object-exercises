/*
Write a function called "transformEmployeeData" that transforms some employee data from one format to another.

The argument will look something like this:
[
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]

Given that input, the return value should look like this:
[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]

Note that the input may have a different number of rows or different keys than the given sample. 

For example, let's say the HR department adds a "tshirtSize" field to each employee record. Your code should flexibly accommodate that.

Starter Code :
*/

// MY SOLUTION
// function transformEmployeeData(array) {
//     const output = array.map(
//         employee => Object.fromEntries(employee)
//     );
// 	return output;
// }

// EXAMPLE SOLUTION
function transformEmployeeData(array) {
    var returnArr = [];

    for (let i = 0; i < array.length; i++) {
        var employeeArr = array[i];
        var employeeObj = {};

        for (let j = 0; j < employeeArr.length; j++) {
            var keyValueArr = employeeArr[j];
            var employeeKey = keyValueArr[0];
            var employeeValue = keyValueArr[1];

            employeeObj[employeeKey] = employeeValue;  
        }
        returnArr.push(employeeObj);
    }
    
    return returnArr;
}