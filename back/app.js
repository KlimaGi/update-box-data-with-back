const express = require('express');

// express serveris
const app = express();
const cors = require('cors');
const mongoose = require("mongoose")
const mainRouter = require("./routes/router");

mongoose.connect("mongodb+srv://admin:admin@cluster0.ygdrbad.mongodb.net/?retryWrites=true&w=majority")
  .then(() => { console.log('connected ok') })
  .catch(e => {
    console.log('connection error')
  })

app.use(cors());

app.use(express.json());

app.listen(4000);

app.use('/', mainRouter);
