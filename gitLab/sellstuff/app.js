const express = require('express');
const mustacheExpress = require('mustache-express')
const app = express()
const path = require('path');
const models = require('./models')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const session = require('express-session');
const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/users');
const checkAuthorization = require('./middlewares/authorization');



const PORT = 8005;
const VIEWS_PATH = path.join(__dirname, '/views');

app.use(session({
  secret: 'i am a secret',
  resave: true,
  saveUninitialized: false
}));



global.__basedir = __dirname;


// static folder
app.use('/uploads', express.static('uploads'));
app.use('/static',express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));


 app.use((req, res, next) => {
  res.locals.isAuthenticated = false;
  next();
}) 

app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
app.set('views', VIEWS_PATH)
app.set('view engine', 'mustache')



app.use('/', indexRoutes)
app.use('/users', checkAuthorization, userRoutes)



app.listen(PORT, (req, res) => {
 console.log(`server is listening on ${PORT}`);
})