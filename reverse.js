// Write a function to reverse the elements of an array.

let arr = [1, 2, 3, 4, 5]
let revarr = []
for (let i = arr.length - 1; i >= 0; i--) {
    revarr.push(arr[i])
}
console.log(revarr);