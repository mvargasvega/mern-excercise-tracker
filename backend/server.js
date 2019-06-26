const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// configure so that we can have our env in our .env file
require('dotenv').config();

// creates our express server
const app = express();
const port = process.env.PORT || 5000;

// middle wear, and so that we an parse json
app.use(cors());
app.use(express.json());

// our database uri , get from mongo db dashboard
const uri = process.env.ATLAS_URI;
// pass in uri, that is how we start our connection
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

// starts server
app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});

