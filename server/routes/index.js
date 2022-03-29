const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('The Library of Me Landing page'))

router.get('/find', controllers.gettAllBooks)
router.get('/find/title/:title', controllers.getBookByTitle)
router.get('/find/author/:author', controllers.getBookByAuthor)

module.exports = router