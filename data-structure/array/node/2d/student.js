// Example 1: A 3x3 array (3 rows, 3 columns)
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Example 1 (matrix):", matrix);
// Output: [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]

// Example 2: A 2x4 array
const studentsGrades = [
    ["Alice", 90, 85, 92],
    ["Bob", 78, 88, 80]
];

console.log("Example 2 (studentsGrades):", studentsGrades);
// Output: [ ['Alice', 90, 85, 92], ['Bob', 78, 88, 80] ]

console.log("Student name (Bob):", studentsGrades[1][0]); // Output: Bob
console.log("Bob's first grade:", studentsGrades[1][1]); // Output: 78
// modification
console.log("Matrix before modification:", matrix);
matrix[0][0] = 10; // Change element at row 0, column 0
matrix[2][1] = 88; // Change element at row 2, column 1
console.log("Matrix after modification:", matrix);
// Output: [ [10, 2, 3], [4, 5, 6], [7, 88, 9] ]
