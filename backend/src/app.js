const express = require('express');
const path = require('path')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
app.use(cors())
require('dotenv').config();

app.use(express.json());

app.use(bodyParser.urlencoded({
    extended: true
  }));

const sign_up_router = require('./routes/sign-up');
const login_router = require('./routes/login')
const server_router = require('./routes/server')
const requests_router = require('./routes/requests')
const dms_router = require('./routes/dms');
const user_router = require('./routes/users')

app.get('/', (req,res) => {
    res.send('hi')
})
const uploadsPath = path.join(__dirname, "../uploads");

app.use('/signup', sign_up_router);

app.use('/login', login_router)

app.use('/server', server_router)

app.use('/requests', requests_router);

app.use("/uploads", express.static(uploadsPath));

app.use('/dms', dms_router)

app.use('/users', user_router)


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});


app.listen(process.env.PORT, (req,res) => {})