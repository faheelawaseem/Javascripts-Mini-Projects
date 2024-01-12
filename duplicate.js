// Remove duplicate elements from an array.

let arr = ['a', 'v', 'v', 'b', 'a', 'e']
for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            delete arr[i]
        }
    }
}
console.log(arr);