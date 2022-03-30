const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('The Library of Me Landing page'))

router.get('/find', controllers.gettAllBooks)
router.get('/find/book/:id', controllers.getBookById)
router.get('/find/book/title/:title', controllers.getBookByTitle)
router.get('/find/book/author/:author', controllers.getBookByAuthor)
router.get('/find/book/genres/:genre', controllers.getBookByGenre)
router.get('/users', controllers.getUsers)
router.get('/find/genres', controllers.getGenres)
router.get('/find/genres/:id', controllers.getGenreById)

router.post('/createUser', controllers.createUser)

router.post('/addToLibrary', controllers.addToLibrary)

module.exports = router