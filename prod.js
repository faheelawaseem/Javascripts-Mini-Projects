// Given a list of numbers, use reduce to find the product of all the elements in the list.

function product(...nums) {
    let prod = nums.reduce((initial, num) => initial *= num, 1)
    console.log(prod);
}

product(34, 214, 12, 4, 634)