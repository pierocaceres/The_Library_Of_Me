const { Author, Book, Genre, User } = require('../models')
const Authors = require('../models/authors')
const Books = require('../models/books')

const gettAllBooks = async (req, res) => {
    try{
        const books = await Book.find()
        return res.status(200).json({books})
    }catch (err){
        return res.status(500).send(err.message)
    }
}

const getBookByTitle = async (req, res) => {
    try{
        const books = await Book.find({title: req.params.title})
        return res.status(200).json({books})
    }catch (err){
        return res.status(500).send(err.message)
    }
}

const getBookByAuthor = async (req, res) => {
    try{
        const author = await Author.find({name: req.params.author})
        return res.status(200).json({author})
    }catch (err){
        return res.status(500).send(err.message)
    }
}

const getBookByGenre = async (req, res) => {
    try{
        const genre = await Genre.find({type: req.params.genre})
        return res.status(200).json({genre})
    }catch (err){
        return res.status(500).send(err.message)
    }
}

module.exports = {
    gettAllBooks,
    getBookByTitle,
    getBookByAuthor,
    getBookByGenre,
}