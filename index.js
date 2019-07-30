const path = require('path')
const express = require('express')
const hbs = require('hbs')
const csvjson = require('csvjson');
const fs = require('fs');

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, './public')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req,res) =>{
    fs.readFile('./flighdata_B.csv', 'utf-8', (err, fileContent) => {
        if (err) {
            console.log(err); // Do something to handle the error or just throw it
            throw new Error(err);
        }
        const jsonObj = csvjson.toObject(fileContent)
            const dataJSON = JSON.stringify(jsonObj)
            res.send(dataJSON)
        });
})
    app.listen(port, () => {
        console.log('Server is up on port ' + port)
    })