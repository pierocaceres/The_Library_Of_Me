const db = require('../db')
const { Genre } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const genres = [
        {
            type: "Action and adventure"
        },
        {
            type: "Alternate history"
        },
        {
            type: "Anthology"
        },
        {
            type: "Chick lit"
        },
        {
            type: "Children's"
        },
        {
            type: "Classic"
        },
        {
            type: "Comic book"
        },
        {
            type: "Coming-of-age"
        },
        {
            type: "Crime"
        },
        {
            type: "Drama"
        },
        {
            type: "Fairytale"
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
            type: "Mystery"
        },
        {
            type: "Paranormal romance"
        },
        {
            type: "Picture book"
        },
        {
            type: "Poetry"
        },
        {
            type: "Political thriller"
        },
        {
            type: "Romance"
        },
        {
            type: "Satire"
        },
        {
            type: "Science fiction"
        },
        {
            type: "Shorty story"
        },
        {
            type: "Suspense"
        },
        {
            type: "Thriller"
        },
        {
            type: "Western"
        },
        {
            type: "Young adult"
        },
        {
            type: "Art"
        },
        {
            type: "Architecture"
        },
        {
            type: "Autobiography"
        },
        {
            type: "Biography"
        },
        {
            type: "Business"
        },
        {
            type: "Economics"
        },
        {
            type: "Crafts"
        },
        {
            type: "Hobbies"
        },
        {
            type: "Cookbook"
        },
        {
            type: "Diary"
        },
        {
            type: "Dictionary"
        },
        {
            type: "Encyclopedia"
        },
        {
            type: "Guide"
        },
        {
            type: "Health"
        },
        {
            type: "Fitness"
        },
        {
            type: "History"
        },
        {
            type: "Home and garden"
        },
        {
            type: "Humor"
        },
        {
            type: "Journal"
        },
        {
            type: "Math"
        },
        {
            type: "Memoir"
        },
        {
            type: "Philosophy"
        },
        {
            type: "Prayer"
        },
        {
            type: "Religion"
        },
        {
            type: "Spirituality"
        },
        {
            type: "Textbook"
        },
        {
            type: "True Crime"
        },
        {
            type: "Review"
        },
        {
            type: "Science"
        },
        {
            type: "Self help"
        },
        {
            type: "Sports"
        },
        {
            type: "Leisure"
        },
        {
            type: "Travel"
        },
        {
            type: "True crime"
        }
    ]

    await Genre.insertMany(genres)
    console.log('Created Genres')
}

const run = async () => {
    await main()
    db.close()
}

run()