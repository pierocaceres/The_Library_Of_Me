const { Author, Book, Genre, User } = require('../models')
// const Authors = require('../models/authors')
// const Books = require('../models/books')

const gettAllBooks = async (req, res) => {
    try{
        const books = await Book.find()
        return res.status(200).json({books})
    }catch (err){
        return res.status(500).send(err.message)
    }
}

const getBookById = async (req, res) => {
    try{
        const book = await Book.findById(req.params.id)
        return res.status(200).json({book})
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

const getUsers = async(req, res) => {
    try{
        const users = await User.find({type: req.params.genre})
        return res.status(200).json({users})
    }catch (err){
        return res.status(500).send(err.message)
    }
}

const getGenres = async (req, res) => {
    try{
        const genres = await Genre.find()
        return res.status(200).json({genres})
    }catch (err){
        return res.status(500).send(err.message)
    }
}

const getGenreById = async (req,res) => {
    try{
        const genre = await Genre.findById(req.params.id)
        return res.status(200).json({genre})
    }catch (err){
        return res.status(500).send(err.message)
    }
}

const createUser = async (req, res) => {
    try {
        const user = await new User(req.body)
        await user.save()
        return res.status(201).json({ user })
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

const addToLibrary = async (req, res) => {
    try {
        console.log(req.body.books)
        const user = await new User.findByIdAndUpdate(req.body._id, { books: 'hello'})
        await user.save()
        return res.status(201).json({ user })
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

module.exports = {
    gettAllBooks,
    getBookById,
    getBookByTitle,
    getBookByAuthor,
    getBookByGenre,
    getUsers,
    getGenres,
    getGenreById,
    createUser,
    addToLibrary,
}