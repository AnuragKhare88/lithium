let printDate = new Date();  
console.log(printDate.getDate()); 

let printMonth = new Date();  
console.log(printMonth.getMonth()+1); 

let getBatchInfo = function(){
 console.log ("Lithium, W3D5, the topic for today is Nodejs module system")
 return "done" 
}

module.exports.newDate = printDate
module.exports.newMonth = printMonth
module.exports.newBatch = getBatchInfo
