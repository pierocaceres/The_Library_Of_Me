const { Author, Book, Genre, User } = require('../models')

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

module.exports = {
    gettAllBooks,
    getBookByTitle,
}