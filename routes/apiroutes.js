const bookLibrary = require("../controllers/bookLibrary");
const router = require("express").Router();

router.route("/api/books/")
.get(bookLibrary.findSaved)
.post(bookLibrary.saveBook)

router.route("/api/books/:id")
.delete(bookLibrary.removeBook)


module.exports = router