const { Schema } = require('mongoose')

const Users = new Schema(
    {
        username: { type: String, require: true},
        password: { type: String, require: true},
        name: { type: String, require: true},
        books: { type: Array, require: false} 
    },
    { timestamps: true }
)