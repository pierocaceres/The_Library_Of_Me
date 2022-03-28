const db = require('../db')
const { Book, Author, Genre } = require('../models')

db.on('error', console.error.bind(console, "Mongodb connection error:"))

const main = async() => {

    const tolkien = await Author.find({name: "J. R. R. Tolkien"})

    const books = [
        {
            title: "The Lord of the Rings",
            book_cover: "https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif",
            description: "The Lord of the Rings is an epic high-fantasy novel by English author and scholar J. R. R. Tolkien. Set in Middle-earth, intended to be Earth at some distant time in the past, the story began as a sequel to Tolkien's 1937 children's book The Hobbit, but eventually developed into a much larger work.",
            genre: [Genre.find({type: "High Fantasy"})[0]._id],
            authors: tolkien[0]._id

        },
    ]

    await Book.insertMany(books)
    console.log('Created books')
}

const run = async () => {
    await main ()
    db.close()
}

run()