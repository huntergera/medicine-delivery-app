const express = require('express')
const {logger} = require("sequelize/lib/utils/logger");

const PORT = 5000

const app = express()

app.listen(PORT, () => console.log(`Server started on port ${5000}`))
