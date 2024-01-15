// Given a list of words, use filter to create a new list containing only the words that have more than 5 letters.

function wordslist(...words) {
    let fiveword = words.filter((w) => {
        w.length > 5 ? console.log(w) : null;
    })
}

wordslist('apple', 'oranges', 'tables', 'pear', 'pens', 'giraffes')