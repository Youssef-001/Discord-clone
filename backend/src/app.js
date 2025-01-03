const express = require('express');
const path = require('path')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();

app.use(express.urlencoded({ extended: true }));

const sign_up_router = require('./routes/sign-up');
const login_router = require('./routes/login')
const server_router = require('./routes/server')

app.get('/', (req,res) => {
    res.send('hi')
})

app.use('/signup', sign_up_router);

app.use('/login', login_router)

app.use('/server', server_router)




app.listen(5000, (req,res) => {})