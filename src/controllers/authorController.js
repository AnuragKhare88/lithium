const { count } = require("console")
const AuthorModel = require("../models/authorModel")


const createAuthor = async function (req, res) {
    let data = req.body
    let savedData = await AuthorModel.create(data)
    res.send({ msg: savedData })
}

// 1st GET API.......
const getAuthorData = async function (req, res) {
    const allBooks = await AuthorModel.find({author_id : 5})
    if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
    else res.send({msg: "No books found" , condition: false})
    return allBooks
}

module.exports.createAuthor = createAuthor
module.exports.getAuthorData = getAuthorData