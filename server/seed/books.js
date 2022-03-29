const db = require('../db')
const { Book, Author, Genre } = require('../models')

db.on('error', console.error.bind(console, "Mongodb connection error:"))

const main = async() => {

    const tolkien = await Author.find({name: "J. R. R. Tolkien"})
    const king = await Author.find({name: "Stephen King"})
    const sparks = await Author.find({name: "Nicholas Sparks"})
    const collins = await Author.find({name: "Susan Collins"})
    const rowling = await Author.find({name: "J. K. Rowling"})
    const brown = await Author.find({name: "Dan Brown"})
    const austen = await Author.find({name: "Jane Austen"})
    const lee = await Author.find({name: "Harper Lee"})
    
    const fantasy = await Genre.find({type: "Fantasy"})
    const horror = await Genre.find({type: "Horror"})
    const romance = await Genre.find({type: "Romance"})
    const youngAdult = await Genre.find({type: "Young adult"})
    const scienceFiction =await Genre.find({type: "Science fiction"})
    const mystery = await Genre.find({type: "Mystery & Thriller"})
    const classic = await Genre.find({type: "Classics"})

    const books = [
        {
            title: "The Lord of the Rings",
            book_cover: "https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif",
            description: "The Lord of the Rings is an epic high-fantasy novel by English author and scholar J. R. R. Tolkien. Set in Middle-earth, intended to be Earth at some distant time in the past, the story began as a sequel to Tolkien's 1937 children's book The Hobbit, but eventually developed into a much larger work.",
            genre: [fantasy[0]._id],
            author: tolkien[0]._id

        },
        {
            title: "Carrie",
            book_cover: "https://upload.wikimedia.org/wikipedia/en/3/31/Carrienovel.jpg",
            description: "Carrie is a gothic horror novel by American author Stephen King. It was his first published novel, released on April 5, 1974, with a first print-run of 30,000 copies.[1] Set primarily in the then-future year of 1979, it revolves around the eponymous Carrie White, a friendless, bullied high-school girl from an abusive religious household who uses her newly discovered telekinetic powers to exact revenge on those who torment her. In the process, she causes one of the worst local disasters the town has ever had.",
            genre: [horror[0]._id],
            author: king[0]._id
        },
        {
            title: "The Notebook",
            book_cover: "https://upload.wikimedia.org/wikipedia/en/d/d9/The_Notebook_Cover.jpg",
            description: "The Notebook is an achingly tender story about the enduring power of love, a story of miracles that will stay with you forever. Set amid the austere beauty of coastal North Carolina in 1946, The Notebook begins with the story of Noah Calhoun, a rural Southerner returned home from World War II.",
            genre: [romance[0]._id],
            author: sparks[0]._id
        },
        {
            title: "The Hunger Games",
            book_cover: "https://upload.wikimedia.org/wikipedia/en/d/dc/The_Hunger_Games.jpg",
            description: "The Hunger Games is a 2008 dystopian novel by the American writer Suzanne Collins. It is written in the perspective of 16-year-old Katniss Everdeen, who lives in the future, post-apocalyptic nation of Panem in North America. The Capitol, a highly advanced metropolis, exercises political control over the rest of the nation. The Hunger Games is an annual event in which one boy and one girl aged 12–18 from each of the twelve districts surrounding the Capitol are selected by lottery to compete in a televised battle royale to the death. The book received critical acclaim from major reviewers and author.",
            genre: [youngAdult[0]._id, scienceFiction[0]._id],
            author: collins[0]._id
        },
        {
            title: "Harry Potter and the Philosopher's Stone",
            book_cover: "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
            description: "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, he faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old.",
            genre: [fantasy[0]._id],
            author: rowling[0]._id
        },
        {
            title: "The Da Vinci Code",
            book_cover: "https://upload.wikimedia.org/wikipedia/en/6/6b/DaVinciCode.jpg",
            description: `The Da Vinci Code follows "symbologist" Robert Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris causes them to become involved in a battle between the Priory of Sion and Opus Dei over the possibility of Jesus Christ and Mary Magdalene having had a child together.`,
            genre: [mystery[0]._id],
            author: brown[0]._id
        },
        {
            title: "Pride and Prejudice",
            book_cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/PrideAndPrejudiceTitlePage.jpg/440px-PrideAndPrejudiceTitlePage.jpg",
            description: "Pride and Prejudice is an 1813 novel of manners written by Jane Austen. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.",
            genre: [romance[0]._id],
            author: austen[0]._id
        },
        {
            title: "To Kill a Mockingbird",
            book_cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/440px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
            description: "To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and was instantly successful. In the United States, it is widely read in high schools and middle schools. To Kill a Mockingbird has become a classic of modern American literature, winning the Pulitzer Prize. The plot and characters are loosely based on Lee's observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was ten.",
            genre: [classic[0]._id],
            author: lee[0]._id
        }
    ]

    await Book.insertMany(books)
    console.log('Created books')
}

const run = async () => {
    await main ()
    db.close()
}

run()