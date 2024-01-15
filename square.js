// Given a list of integers, use map to square each element in the list.

function square(...nums) {
    let sqnums = nums.map((n) => Math.pow(n, 2))
    console.log(sqnums);
}

square(2, 45, 32, 56, 2)
