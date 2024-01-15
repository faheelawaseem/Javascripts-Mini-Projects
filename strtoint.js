// Given a list of strings representing numbers, use map to convert each string to an integer.

function strtoint(...strs) {
    let ints = strs.map((n) => Number(n))
    console.log(ints);
    let evennums = ints.filter ((el) => el % 2 == 0)
    console.log(evennums);
}

strtoint('5', '123', '54', '24')

// From task 3, use filter to keep only the even numbers.

