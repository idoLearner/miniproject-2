//import
const express = require('express')
const recordsRouter = express.Router()
const bodyParser = require('body-parser');
const connection = require('../lib/connection.js')

const app = express()

// SET MIDDLE WARE AND VIEWS
recordsRouter.use(bodyParser.json())
recordsRouter.use(bodyParser.urlencoded({extended: false}))

//GET all records
recordsRouter.get('/records', (req, res)=>{
    let sql = 'SELECT * from records'
    let query = connection.query(sql, (err, records) => {
        // if (err) throw err
        // res.render('index', {
        //     header: 'Records',
        //     records: records
        // })
        try {
            res.render('records', {
                header: 'Records',
                records: records
            })
            // res.json(records)
        } catch (error) {
            console.log('Error Routes')
        }
    }) 
})
module.exports = recordsRouter