const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const exercisesRoute = require('./routes/exercises');
const usersRoute = require('./routes/users');

require('dotenv').config({
  path: './backend/.env'
});

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json())

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Router
app.use('/exercises', exercisesRoute);
app.use('/users', usersRoute);


app.listen(port, () => {
  console.log(`Mongo server is runnig on port: ${port}`);
});
