const { Schema } = require('mongoose')

const Genres = new Schema (
    {
        genre: { type: String, require: true }
    },
    { timestamps: true }
)

module.exports = Genres