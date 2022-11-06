const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

//=============================================================================================
                            // 1st post API

const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

//==============================================================================================
                             // 2nd post API

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({status: false, msg: "username or password is invalid"});

  let token = await jwt.sign({userId: user._id.toString()},"functionup-lithium");
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
};

//===================================================================================================
                               // 3rd get API

const getUserData = async function (req, res) {
  
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};

//====================================================================================================
                                // 4th put API 

const updateUser = async function (req, res) {
  
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  if (!user) {return res.send("No such user exists");}
  
  
  let updatedMobile = req.body.mobile
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId },{$set:{mobile:updatedMobile}},{new:true});
  res.send({ status:"Done", updatedData: updatedUser });
};
//========================================================================================================
                                  // 5th delete API

  const deleteUser = async function (req, res) {
  let dlt = req.params.userId
 let isDeleted = await userModel.findByIdAndDelete(dlt);
 res.send({ status:"Deleted", updatedData: isDeleted });

};

//==========================================================================================================
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
