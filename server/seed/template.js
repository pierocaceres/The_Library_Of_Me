const db = require('../db')
const { } = require('../models')

db.on('error', console.error.bind(console, "Mongodb connection error:"))

const main = async() => {
    const /*functionName*/ = [
        {},
        {}
    ]

    await /*Imported*/.insertMany(/*functionName*/)
    console.log('Created _________')
}

const run = async () => {
    await main ()
    db.close()
}

run()