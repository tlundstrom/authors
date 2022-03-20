const Author = require('../models/author.model')

module.exports = {

    createAuthor : (req, res) => {
        Author.create(req.body)
            .then(author => {
                return res.json(author)
            })
            .catch(err => {
                return res.status(400).json(err);
            });
    },

    getAllAuthors : (req, res)=>{
        Author.find()
            .then((authors)=>{
                res.json(authors)
            })
            .catch(err => {
                return res.json({ message: "Something went wrong...", error: err})
            });
    },

    getOneAuthor : (req, res) => {
        Author.findById(req.params.id)
            .then(author => {
                return res.json(author)
            })
            .catch(err => {
                return res.status(404).json({message: "We're sorry, but we could not find the author you are looking for. Would you like to add an author to our database?",error: err});
            });
    },

    updateOneAuthor : (req, res) => {
        Author.findByIdAndUpdate(
            req.params.id ,
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedAuthor => {
                return res.json(updatedAuthor)
            })
            .catch(err => {
                return res.status(400).json(err);
            });
    },

    deleteOneAuthor: (req, res) => {
        console.log(req.params.id);
        Author.deleteOne({_id: req.params.id})
            .then(deleted => {
                return res.json(deleted);
            })
            .catch(err => {
                return res.json({ message: "Something went wrong...", error: err})
            });
    }
}