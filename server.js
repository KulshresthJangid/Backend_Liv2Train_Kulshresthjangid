require('dotenv').config()
const { application } = require('express')
const express = require('express')

const connection = require('./db/connection')
const Center = require('./db/db')
const getAPI = require('./routes/getAPI')
const postAPI = require('./routes/postAPI')

const app = express();

app.use('/post', postAPI)
app.use('/get', getAPI)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})

