const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res) {
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function (req, res) {
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName)
})

// Example 2 for path params
router.get('/student-details/:name', function (req, res) {
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})
//=========================== 1 ==================================================================

                     // Assignment/get-API Problem-1
router.get('/movies', function (req, res) {
    let movies = [' Rang de Basanti ', ' The Shining ', ' Lords of rings ', ' Batman begins ']
    res.send("Movies Names are here : " + movies)
})

//=========================== 2 ===================================================================

                     // Assignment/get-API Problem-2
router.get('/movies/:indexNumber', function (req, res) {
    let movies = ['Rang de Basanti', 'The Shining', 'Lords of rings', 'Batman begins']
    let movieName = req.params
    
    res.send(movieName.indexNumber<movies.length?"Movie name : " + movies[movieName.indexNumber]: "Error : Please use a valid index")
})

//=========================== 3 ===================================================================

                     // Assignment/get-API Problem-3
router.get('/movies/:indexNumber', function (req, res) {
    let movies = ['Rang de Basanti', 'The Shining', 'Lords of rings', 'Batman begins']
    let movieName = req.params
    res.send("Movie name : " + movies[movieName.indexNumber])
})

//=========================== 4 ====================================================================

                     // Assignment/get-API Problem-4
router.get('/films', function (req, res) {
    let films = [{ "id": 1, "name": "The Shining" }, { "id": 2, "name": "Incendies" }, { "id": 3, "name": "Rand de Basanti" }, { "id": 4, "name": "Finding Nemo" }]
    res.send(films)
})

//=========================== 5 ===================================================================

                    // Assignment/get-API Problem-5
router.get('/films/:filmId', function (req, res) {
    let films = [{ "Id": 1, "name": "The Shining" }, { "Id": 2, "name": "Incendies" }, { "Id": 3, "name": "Rand de Basanti" }, { "Id": 4, "name": "Finding Nemo" }]
    let filmName = req.params
    res.send(filmName.filmId<films.length?"Film Name : " + films[filmName.filmId]:"Error : No movie exists with this Id")
})

//========================== The End ================================================================

module.exports = router;