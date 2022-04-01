const mongoose = require('mongoose')
const AuthorSchema = require('./authors')
const BookSchema = require('./books')
const GenreSchema = require('./genre')
const UserSchema = require('./users')

const Author = mongoose.model('Author', AuthorSchema)
const Book = mongoose.model('Book', BookSchema)
const Genre = mongoose.model('Genre', GenreSchema)
const User = mongoose.model('User', UserSchema)

module.exports = {
    Author,
    Book,
    Genre,
    User
}