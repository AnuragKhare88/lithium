const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger')
const Que2 = require('../util/helper')
const Que3 = require('../validator/formatter')

//importing external package
const underscore = require('underscore')
const lodash = require('lodash')

router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    console.log("Calling my function ",xyz.myFunction())
    console.log("The value of the constant is ",xyz.myUrl)
    console.log("my function call", xyz.welcome1()) 

    console.log("Date",Que2.newDate)             
    console.log("Month",Que2.newMonth)  
    console.log(Que2.newBatch())   

    console.log("after update",Que3.abc)
    
    //Trying to use an external package called underscore
//     let myArray = ['Akash', 'Pritesh', 'Sabiha']
//     let result = underscore.first(myArray)
//    console.log("The result of underscores examples api is : ", result)
    let getMonth = ['january','february','march','april','may','june','july','august','september','october','november','december']
   console.log(lodash.chunk(getMonth,3))

   let oddNum = [1,3,5,7,9,11,13,15,17,19]
   console.log(lodash.tail(oddNum))
    
   let arr1 = [1,4,7,9,4]
   let arr2 = [2,3,1,5,7]
   let arr3 = [5,7,3,9,2]
   let arr4 = [9,8,5,2,1]
   let arr5 = [4,8,2,3,9]
   console.log(lodash.union(arr1,arr2,arr3,arr4,arr5))

   let pair = [["Cricketer","Sachin Tendulker"],["Actor","Amitabh Bachhan"],["Politician","Narendra Modi"],["Baba","Ramdev Baba"]]
   console.log(lodash.fromPairs(pair))

    res.send('My first ever api!')

    //To be tried what happens if we send multiple response 
    //res.send('My second api!')
});

module.exports = router;

