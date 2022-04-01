const { Schema } = require('mongoose')

const Authors = new Schema(
    {
        name: { type: String, required: true},
        picture: { type: String, require: false}
    },
    { timestamps: true }
)

module.exports = Authors