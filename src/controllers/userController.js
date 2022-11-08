const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    let data = req.body;
    if (Object.keys(data).length != 0) {
      let savedData = await userModel.create(data);
      res.status(201).send({ status: true, data: savedData })
    } else res.status(400).send({ status: false, msg: "BAD REQUEST" })
  }
  catch (error) {
    res.status(500).send({ status: false, msg: error.message })
  }
};
//================================================================================================

const loginUser = async function (req, res) {
  try {
    if (req.body && req.body.emailId && req.body.password) {

      let user = await userModel.findOne({ emailId: req.body.emailId, password: req.body.password });
      if (user) {
        let token = jwt.sign(
          {
            userId: user._id.toString(),
            batch: "lithium",
            organisation: "FUnctionUp",
          },
          "functionup-lithium"
        );
        res.setHeader("x-auth-token", token);
        res.status(200).send({ status: true, data: token });
      } else {
        res.status(401).send({ status: false, msg: "invalid emailId or password" })
      }
    } else {
      res.status(400).send({ status: false, msg: "request body must be contain emailId and password" })
    }
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message })
  }
};
//========================================================================================================

const getUserData = async function (req, res) {
  try {

    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (userDetails) {
      res.status(200).send({ status: true, data: userDetails })
    } else {
      res.status(404).send({ status: false, msg: "user not found" })
    }
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message })
  }
};
//============================================================================================

const updateUser = async function (req, res) {

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: updatedUser, data: updatedUser });
};
//=============================================================================================

const postMessage = async function (req, res) {
  try{
  let message = req.body.message
  let userToBeModified = req.params.userId
  let userLoggedIn = decodedToken.userId

  if (userToBeModified != userLoggedIn) return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })

  let user = await userModel.findById(req.params.userId)
  if (!user) return res.send({ status: false, msg: 'No such user exists' })

  let updatedPosts = user.posts
  updatedPosts.push(message)
  let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })

  return res.send({ status: true, data: updatedUser })
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message })
  }
}

//================================================================================================

const deleteUser = async function (req, res) {
  try {
    let dlt = req.params.userId
    if (dlt === userId) {
      let isDeleted = await userModel.findByIdAndDelete(dlt);
      res.status(200).send({ status: "Deleted", updatedData: isDeleted });
    } else res.status(404).send({ status: false, msg: "USER NOT FOUND" })
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message })
  }
};
//==================================================================================================

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage;
module.exports.deleteUser = deleteUser;
