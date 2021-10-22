require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const connection = require('./db/connection')
const Center = require('./db/db')
const getAPI = require('./routes/getAPI')
const postAPI = require('./routes/postAPI')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/post', postAPI)
app.use('/get', getAPI)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})

