// Calculate the product of an array, but leave one particular number from that array.

let arr = [2, 4, 5, 6, 6, 3], prod = 1, x = 6
for (let i = 0; i < arr.length; i++) {
    if(arr[i] != x) prod *= arr[i]
}
console.log(prod);