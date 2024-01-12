// Count vowels and consonants of a string.

let str = "Hello World", vowels = 0, consonants = 0
for (let i = 0; i < str.length; i++) {
    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
        vowels++
    }
    else {
        consonants++
    }
}
console.log(`The string has ${vowels} vowels and ${consonants} consonants`);