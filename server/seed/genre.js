const db = require('../db')
const { Genre } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const genres = [
        {
            genre: "Children's"
        },
        {
            genre: "Classics"
        },
        {
            genre: "Fantasy"
        },
        {
            genre: "Historical fiction"
        },
        {
            genre: "Horror"
        },
        {
            genre: "Humor"
        },
        {
            genre: "Literary fiction"
        },
        {
            genre: "Mystery & Thriller"
        },
        {
            genre: "Nonfiction"
        },
        {
            genre: "Poetry"
        },
        {
            genre: "Romance"
        },
        {
            genre: "Science fiction"
        },
        {
            genre: "Young adult"
        },
    ]

    await Genre.insertMany(genres)
    console.log('Created Genres')
}

const run = async () => {
    await main()
    db.close()
}

run()