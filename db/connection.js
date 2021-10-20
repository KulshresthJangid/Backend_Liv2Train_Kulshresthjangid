require('dotenv').config()
const mongoose = require('mongoose')


mongoose.connect(process.env.MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('DB server is connected')
}).catch((e) => {
    console.log('Unable to connect to the DB server at the moment. Please try again')
})
