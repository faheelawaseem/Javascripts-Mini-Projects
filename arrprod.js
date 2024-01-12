// Calculate the product of an array, but leave one particular number from that array.

let arr = [2, 4, 6, 3], prod = 1
arr.splice(1,1)
for (let i = 0; i < arr.length; i++) {
    prod *= arr[i]
}
console.log(prod);