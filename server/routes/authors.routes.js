const AuthorController = require('../controllers/author.controller');
const { populate } = require('../models/author.model');

module.exports = (app) => {
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.get('/api/authors/:id', AuthorController.getOneAuthor);
    app.post('/api/authors', AuthorController.createAuthor);
    app.put('/api/authors/:id', AuthorController.updateOneAuthor);
    app.delete("/api/authors/:id", AuthorController.deleteOneAuthor);
}