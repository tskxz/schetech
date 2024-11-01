const express = require('express')

const app = express()

app.get('/api/', (req, res) => {
    res.json({
        message: 'Welcome to the API schetech'
    })
})

module.exports = app