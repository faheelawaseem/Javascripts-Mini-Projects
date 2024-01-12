// Calculate the average of the elements in an array.

let arr = [3, 5, 7, 2]
let avg = 0, sum = 0
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    avg = sum / (i+1)
}
console.log(avg);