if(process.env.NODE_ENV !== 'production') require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const ejs = require('ejs')
const expressLayout = require('express-ejs-layouts')
const path = require('path')
// port
const port = process.env.PORT || 3000

/********* SESSION SETUP **********/
// express-session
const session = require('express-session')
// cookie-parser
// const cookie = require('cookie-parser')
//express flash
const flash = require('express-flash')
const MongoDBStore = require('connect-mongo')(session)
/********* SESSION SETUP **********/

// routing files
const webRoutes = require('./routes/web')
//mongoose default connection
const DB = process.env.DATABASE
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
//connection check
// db.on('error', console.error.bind(console, 'MongoDB connection error!'))
db.once('open', () => console.log('connected to the database')).catch(error => console.log('MongoDB connection error!'))

/********* SESSION STORE **********/
const mongoStore = new MongoDBStore({
    mongooseConnection: db,
    collection: 'pizza-sessions'
})
/********* SESSION STORE **********/
/********* SESSION CONFIG MIDDLEWARE **********/
// session config
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    store: mongoStore,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 1
    }
}))
app.use(flash())
/********* SESSION CONFIG MIDDLEWARE **********/

// set template engine
app.use(express.json())
app.use(expressLayout)
app.use(express.static('public'))
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

// Router setup
app.use('', webRoutes)


app.listen(port, () => console.log('Listening on port ', port))
