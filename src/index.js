// const uri = "mongodb+srv://vothanhtung150600:012349230aA@cluster0.de7wkxf.mongodb.net/?retryWrites=true&w=majority";


const express = require('express');
const mongoose = require('mongoose');

if (process.env.NODE_ENV !== 'production')
    require('dotenv').config();

const port = process.env.PORT || 8001;

const app = express();

// connect to mongodb
mongoose.connect(process.env.COFFEE_DATA, () => console.log('Connected to mongodb'))


// routes
app.use('/', (req, res, next) => {
  res.status(res.statusCode || 200);
    res.json({
        message: "hello world"
    });
});

app.use((req, res, next) => {
    const err = new Error('not found');
    res.status(404);
    next(err);
});

app.use((err, req, res, next) => {
    res.status(res.statusCode || 500);
    res.json({
        message: err.message
    });
});

app.listen(port, () => console.log("Listening on port 8001"));