// Print an array of 5 books having information (Title, Author, Published Year, Price) using loop.

let books = [
    {
        title: 'Introduction to Computer',
        author: 'Amit Garg',
        publishedyear: 2011,
        price: 500
    },

    {
        title: 'Client Server Computing',
        author: 'Lalit Kumar',
        publishedyear: 2012,
        price: 700
    },

    {
        title: 'Mobile Computing',
        author: 'Vinay Kumar Singhal',
        publishedyear: 2013,
        price: 1200
    },

    {
        title: 'Data Structure Using C',
        author: 'Sharad Kumar Verma',
        publishedyear: 2015,
        price: 900
    },

    {
        title: 'Computer Networks',
        author: 'Saurabh Singhal',
        publishedyear: 2016,
        price: 400
    }
]

books.forEach(i => console.log(i));