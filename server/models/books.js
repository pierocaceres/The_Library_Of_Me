const { Schema } = require('mongoose')

const Books = new Schema(
    {
        title: { type: String, require: true},
        book_cover: { type: String, require: true},
        description: { type: String, require: true},
        genre: { type: Array, require: true},
        author: { type: Schema.Types.ObjectId, ref: 'authors'},
    },
    { timestamps: true }
)

module.exports = Books