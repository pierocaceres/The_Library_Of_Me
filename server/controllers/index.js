const { Author, Book, Genre, User } = require('../models')

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
        const genre = await Genre.find({genre: req.params.genre})
        return res.status(200).json({genre})
    }catch (err){
        return res.status(500).send(err.message)
    }
}

const getUsers = async(req, res) => {
    try{
        const users = await User.find()
        return res.status(200).json({users})
    }catch (err){
        return res.status(500).send(err.message)
    }
}

const getUserById = async(req, res) => {
    try{
        const users = await User.findById(req.params.id)
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

const getAuthorById = async (req,res) => {
    try{
        const author = await Author.findById(req.params.id)
        return res.status(200).json({author})
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
        const user = await User.findByIdAndUpdate(req.body._id, { books: req.body.books })
        user.save()
        return res.status(201).json({ user })
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
}

const removeFromLibrary = async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({username: req.body.username}, { $pull: {books: req.body.book}})
        user.save()
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
    getUserById,
    getGenres,
    getGenreById,
    getAuthorById,
    createUser,
    addToLibrary,
    removeFromLibrary,
}

// const delStudyResource = async (req, res) => {
//     try {
//         const del = await Study.find({ "displayName" : req.params.name }).deleteOne().exec()
//             return res.status(200).json({ del })
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// }

// axios.delete('URL', name)
