const config = require('./utils/config');
const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const blogsRouter = require("./controllers/blogs");

mongoose.connect(config.MONGODB_URL).then(() => {
    console.log("connected to mongodb");
}).catch((error) => {
    console.log(`error connecting to mongodb: ${error.message}`)
})

app.use(cors());
app.use(express.json());

app.use('/api/blogs', blogsRouter);

module.exports = app
