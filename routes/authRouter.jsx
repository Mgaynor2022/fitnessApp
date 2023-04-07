const express = require("express")
const authRouter = express.Router()
const User = require("../models/userSchema.jsx")
const jwt = require("jsonwebtoken")

authRouter.post("/signup", async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      res.status(403);
      return next(new Error("that username is already in use!"));
    }
    return saveNewUser({ res, req, next });
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

async function saveNewUser({ req, res, next }) {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET);
    return res.status(201).send({ token, user: savedUser.withoutPassword() });
  } catch (err) {
    res.status(500);
    return next(err);
  }
}


authRouter.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    console.log(user);
    if (!user) {
      res.status(403);
      return next(new Error("Username is not recognized."));
    }
    user.checkPassword(req.body.password, (err, isMatch) => {
      if (err) {
          res.status(403)
          return next(new Error("Username or password are incorrect"))
              
      }
      if (!isMatch) {
          res.status(403)
          return next(new Error("Username or password are incorrect"))
      }
      return userLogin({ req, res, next, user})
      // const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
      // return res.status(200).send({ token, user : user.withoutPassword() })
  }) 
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

async function userLogin({ req, res, next, user }) {
  try {
    const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
    return res.status(200).send({ token, user: user.withoutPassword() });
  } catch (err) {
    res.status(500);
    return next(err);
  }
}

// async function userLogin({ req, res, next, user }) {
//   try {
//     const token = jwt.sign(user.toObject(), process.env.SECRET);
//     return res.status(200).send({ token, user });
//   } catch (err) {
//     res.status(500);
//     return next(err);
//   }
// }

module.exports = authRouter

