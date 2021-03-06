const express = require('express');
const roomData = require('./Api/1_roomData.json')
const deskData = require('./Api/2_deskData.json')
const studentData = require('./Api/3_studentData.json')
const dailyData = require('./Api/4_dailyData.json')
const app = express()
var cors = require('cors');


app.use(cors())


app.get('/classroom/students', (req, res) => {
    if (!studentData) {
        res.status(404)
    }
    res.status(200).send(studentData)
})

app.get('/classroom/rooms', (req, res) => {
    if (!roomData) {
        res.status(404)
    }
    res.status(200).send(roomData)
})

app.get('/classroom/deskdata', (req, res) => {
    if (!deskData) {
        res.status(400)
    }
    res.status(200).send(deskData)
})
app.get('/classroom/dailydata', (req, res) => {
    if (!dailyData) {
        res.status(400)
    }
    res.status(200).send(dailyData)
})


app.listen(3000, () => {
    console.log("Running Successfully at 3000 Port")
})

module.exports = app;