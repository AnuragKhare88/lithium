const url = "https://www.google.com"

let printSomething = function() {
    console.log("Request details are - a, b, c")
    return "done"
}
let Welcome = function() {
    console.log("Welcome to my application. I am Anurag Khare and a part of FunctionUp Lithium cohort.")
    return "done"
}

let abc = 2022
module.exports.myUrl = url
module.exports.myFunction = printSomething
module.exports.welcome1 = Welcome