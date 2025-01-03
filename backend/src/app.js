const express = require('express');
const path = require('path')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();

const sign_up_router = require('./routes/sign-up');


app.get('/', (req,res) => {
    res.send('hi')
})

app.use('/signup', sign_up_router);

passport.use(
    new LocalStrategy((username, password, done) => {
      // get user from database
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



app.listen(5000, (req,res) => {})