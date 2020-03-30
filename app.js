'use strict'

const express = require('express')
const bodyParser =  require('body-parser')
const app = express()
const api = require('./routes')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
 
// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('hbs', require('exphbs'));
app.set('view engine', 'hbs');



app.use('/api',api)
app.get('/login', function (req, res) {
    res.render('login', {
        layout: 'default'
    })
})
app.get('/', (req,res) => {
    res.render('product')
})

module.exports = app