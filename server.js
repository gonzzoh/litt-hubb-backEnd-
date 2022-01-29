require('dotenv').config()
const cors = require('cors')
const express = require('express')
const partyRoutes = require('./controllers/partyController')
const postRoutes = require('./controllers/postController')

const port = process.send.PORT || 4000
const app = express()


app.use(cors())
app.use(express.json())
app.use('/parties', partyRoutes)
app.use('/post', postRoutes)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
 