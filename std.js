// Print an array of 10 students having information (Name, Father, Age, Class, Result).

let students = [
    {
        name: 'Kevin',
        father: 'Tim',
        age: 12,
        class: 6,
        result: 'Pass'
    },
    {
        name: 'Patrick',
        father: 'Dennis',
        age: 13,
        class: 7,
        result: 'Pass'
    },
    {
        name: 'Thomas',
        father: 'Kim',
        age: 12,
        class: 6,
        result: 'Fail'
    },
    {
        name: 'Robin',
        father: 'Tom',
        age: 13,
        class: 6,
        result: 'Pass'
    },
    {
        name: 'Daan',
        father: 'Danny',
        age: 13,
        class: 7,
        result: 'Fail'
    },
    {
        name: 'Mike',
        father: 'Rick',
        age: 14,
        class: 9,
        result: 'Fail'
    },
    {
        name: 'Sanne',
        father: 'Wesley',
        age: 12,
        class: 5,
        result: 'Pass'
    },
    {
        name: 'Anne',
        father: 'Jeffery',
        age: 13,
        class: 7,
        result: 'Fail'
    },
    {
        name: 'Samantha',
        father: 'Bart',
        age: 14,
        class: 7,
        result: 'Pass'
    },
    {
        name: 'Nick',
        father: 'Mark',
        age: 13,
        class: 6,
        result: 'Pass'
    }
]

// console.log(students);

// The students from task 2 that have been failed must be stored in another array.

let failstds = []

for (let i = 0; i < students.length; i++) {
    if (students[i].result == 'Fail') {
        failstds.push(students[i])
    }
}
console.log(failstds);


// The students from task 2 that have been passed must be stored in another array.
// The students from task 2 that have been passed are upgraded to the next class, therefore upgrade their classes.

let passstds = []

for (let i = 0; i < students.length; i++) {
    if (students[i].result == 'Pass') {
        students[i].class += 1
        passstds.push(students[i])
    }
}
console.log(passstds);