const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('The Library of Me Landing page'))

router.get('/find/books', controllers.gettAllBooks)
router.get('/find/authors', controllers.getAllAuthors)
router.get('/find/book/:id', controllers.getBookById)
router.get('/find/book/title/:title', controllers.getBookByTitle) /* No longer needed since we have a dynamic search bar*/
router.get('/find/book/author/:author', controllers.getBookByAuthor)
router.get('/find/book/genres/:genre', controllers.getBookByGenre)
router.get('/users', controllers.getUsers)
router.get('/users/:id', controllers.getUserById)
router.get('/find/genres', controllers.getGenres)
router.get('/find/genres/:id', controllers.getGenreById)
router.get('/find/author/:id', controllers.getAuthorById)

router.post('/users/createUser', controllers.createUser)
router.post('/library/addToLibrary', controllers.addToLibrary)
router.post('/library/removeFromLibrary', controllers.removeFromLibrary)

module.exports = router