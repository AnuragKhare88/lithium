const authenticate = function(req, req, next) {
    //check the token in request header
    //validate this token
    let token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
    console.log(token);
  
    let decodedToken = jwt.verify(token, "functionup-lithium");
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" });
    
      next ()
  }



    const authorise = function(req, res, next) {
      // comapre the logged in user's id and the id in request
     if (user.userId!== userId){
      return res.send("Invalid Credentials");
     }
  
  
          if(user.password !== password){
      return res.send("Invalid Credentials");
    }
    
  
      next()
  }



module.exports.authenticate = authenticate
module.exports.authorise = authorise