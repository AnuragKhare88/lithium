const { count } = require("console")
const AuthorModel = require("../models/authorModel")
const BookModel = require("../models/bookModel")

// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData = async function (req, res) {
//     let allBooks = await BookModel.find({ authorName: "HO" })
//     console.log(allBooks)
//     if (allBooks.length > 0) res.send({ msg: allBooks, condition: true })
//     else res.send({ msg: "No books found", condition: false })
// }


// const updateBooks = async function (req, res) {
//     let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    // let allBooks = await BookModel.findOneAndUpdate(
    //     { authorName: "ABC" }, //condition
    //     { $set: data }, //update in data
    //     { new: true, upsert: true },// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//     )

//     res.send({ msg: allBooks })
// }

// const deleteBooks = async function (req, res) {
//     // let data = req.body 
//     let allBooks = await BookModel.updateMany(
//         { authorName: "FI" }, //condition
//         { $set: { isDeleted: true } }, //update in data
//         { new: true },
//     )

//     res.send({ msg: allBooks })
//}
//=====================================================================================================

//  API.......
const createBook = async function (req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}



// 2nd Get API.......
const getTheListOfBooks = async function (req, res) {
    const author = await AuthorModel.findOne({author_Name :"Chetan Bhagat"})
    const authorId = author.author_id
    let finalData = await BookModel.find({author_id:authorId[0].author_id})
    res.send({msg:finalData})
}

// 3rd Get API.......
const findAndUpdate = async function (req, res) {
    const newValue = await BookModel.findOneAndUpdate({name: "Two States"},{$set: {price: 100}},{new: true})
    const authorId = newValue.author_id
    const author = await AuthorModel.find({author_id: authorId})
    res.send({ authorNmae: author.author_name, price: newValue.price })
}

// 4th Get API.......
const findBook =  async function (req, res) {
    let bookList = await BookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,name:1})
    response = [{name:"book name",authorName:"author_Name"},{},{},{}]
    const authorIdList = bookList.map(book => book.author_id)
    res.send({msg:bookList,authorIdList})
}



        // CRUD OPERATIONS:
        // CREATE
        // READ
        // UPDATE
        // DELETE



        
        module.exports.createBook = createBook
        module.exports.getTheListOfBooks = getTheListOfBooks
        module.exports.findAndUpdate = findAndUpdate
        module.exports.findBook = findBook

        // module.exports.updateBooks = updateBooks
        // module.exports.deleteBooks = deleteBooks
