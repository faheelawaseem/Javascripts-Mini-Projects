// Write a program that calculates the sum of all even numbers and the sum of all odd numbers from 1 to 50.

let i = 1, sumeven = 0, sumodd = 0

while (i <= 50) {
    if (i%2 == 0) {
        sumeven += i
        i++
    }
    else if (i%2 != 0) {
        sumodd += i
        i++
    }
}

console.log(sumeven);
console.log(sumodd);