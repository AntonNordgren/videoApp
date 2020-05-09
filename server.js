const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3000

app.use(cors())
app.use(express.static('static'))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.listen(PORT, (req, res) => {
    console.log(`Listen at port ${PORT}`)
})