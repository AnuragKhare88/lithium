const authenticate = function (req, res, next) {
  try {
 let token = req.headers["x-auth-token"];
  if (!token) return res.status(200).send({ msg: "token must be present" });
  console.log(token);

  let decodedToken = jwt.verify(token, "functionup-lithium");
  if (!decodedToken)
    return res.status(200).send({ msg: "token is invalid" });
  next()
} catch (error) {
  res.status(500).send({ status: false, msg: error.message })
}
};

//=================================================================================================

const authorise = function (req, res, next) {
  try {
  let {userId, password} = req.body
  if (user.userId !== userId) {
    return res.status(200).send("Invalid Credentials");
  }
  if (user.password !== password) {
    return res.status(200).send("Invalid Credentials");
  }
  next()
} catch (error) {
  res.status(500).send({ status: false, msg: error.message })
}
};



module.exports.authenticate = authenticate
module.exports.authorise = authorise