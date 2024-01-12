// Check if an word is a palindrome (reads the same backward as forward ).

let pword = 'radar', left = 0, right = pword.length - 1
while (right > left) {
    if (pword[left++] != pword[right--]) {
        console.log("Not palindrome");
    break
    }
    else console.log("Palindrome");
    break
}