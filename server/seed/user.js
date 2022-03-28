const db = require('../db')
const { User } = require('../models')

db.on('error', console.error.bind(console, "Mongodb connection error:"))

const main = async() => {
    const users = [
        {
            username: 'PieroC',
            password: '1234',
            name: 'Piero',
        },
    ]

    await User.insertMany(users)
    console.log('Created users')
}

const run = async () => {
    await main ()
    db.close()
}

run()