// Write a function to remove all negative numbers from an array.

let arr = [4,-5,2,-7]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0)
    delete arr[i]
}
console.log(arr);