const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController');
const user_queries = require('../queries/user_queries')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require("dotenv").config();
const cors = require('cors')
router.use(cors());

passport.use(
    new LocalStrategy(async(username, password, done) => {
      let user = await user_queries.get_user(username);
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      // Compare hashed passwords
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) return done(err);
        if (!isMatch) return done(null, false, { message: 'Incorrect password.' });
        return done(null, user);
      });
    })
  );



  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
  //   const user = users.find((u) => u.id === id);
    done(null, user);
  });
  


router.post("/", passport.authenticate('local', { session: false }), async (req, res, next) => {
    try {
      let user =  await user_queries.get_user(req.body.username);
      console.log(user);  
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
  
      const access_token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
      res.json({ "access_token":access_token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });



  module.exports = router;