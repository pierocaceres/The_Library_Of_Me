const { Schema } = require('mongoose')

const Genres = new Schema (
    {
        type: { type: String, require: true }
    },
    { timestamps: true }
)

module.exports = Genres