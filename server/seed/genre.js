const db = require('../db')
const { Genre } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const genres = [
        {
            type: "Children's"
        },
        {
            type: "Classics"
        },
        {
            type: "Fantasy"
        },
        {
            type: "Historical fiction"
        },
        {
            type: "Horror"
        },
        {
            type: "Humor"
        },
        {
            type: "Literary fiction"
        },
        {
            type: "Mystery & Thriller"
        },
        {
            type: "Nonfiction"
        },
        {
            type: "Poetry"
        },
        {
            type: "Romance"
        },
        {
            type: "Science fiction"
        },
        {
            type: "Young adult"
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