//IMPORT
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const connection = require('./lib/connection.js')
const addRouter = require('./routes/add.js')
const editRouter = require('./routes/edit.js')
const recordsRouter = require('./routes/records.js')
const deleteRouter = require('./routes/delete.js')
const recordseditRouter = require('./routes/records-edit.js')

const port = 3000
const app = express()

// SET MIDDLE WARE AND VIEWS
app.set('views', './views')
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//ROUTES
app.use('/', addRouter)
app.use('/', editRouter)
app.use('/', recordsRouter)
app.use('/', deleteRouter)
app.use('/', recordseditRouter)
//Display use get
app.get('/', (req, res)=>{
    res.render('index', {
        header: 'HOME'
    })
})
//CHECK CONNECTION SERVER AND DATABASE
connection.connect(function(error){
    try {
        console.log('Database Connected.')
    } catch (error) {
        console.log('Error Connection to Database')
    }
})
app.listen(port, ()=>{
    console.log(`Port is running at ${port}`);
})
//