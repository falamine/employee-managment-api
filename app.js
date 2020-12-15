const express = require('express')
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose')

const app = express();
app.use(cors())
app.use(express.json());

const PORT = process.env.PORT || 3000
const DBURI = process.env.TESTDB


// Connect to Mongoose and set connection variable
mongoose.connect(DBURI, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;

connection.once('open', () => {
  console.log("connection stablished successfully")
})

const employeeRouter = require('./routes/employeeRoutes')
app.use('/api/v1/employees', employeeRouter);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})