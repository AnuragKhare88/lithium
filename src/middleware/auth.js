let tokenAuth = function (req, res, next) {

    let token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });
  console.log(token);

  let decodedToken = jwt.verify(token, "functionup-lithium");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });
  
    next ()
}

module.exports.tokenAuth = tokenAuth