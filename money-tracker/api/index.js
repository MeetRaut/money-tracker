// index.js

const express = require('express');
const cors = require('cors')
require('dotenv').config();
const Transaction = require('./models/transaction.js');
const { default: mongoose } = require('mongoose');
const app = express();

const PORT = 4000;

app.use(cors());
app.use(express.json());
// Define the route handler
app.get('/', (req, res) => {
    res.json('test ok4');
});

app.post('/api/transaction', async(req, res) =>{
    await mongoose.connect('process.env.MONGO_URL_THIS');
    console.log(MONGO_URL_THIS)
    const {name, description, datetime, price} = req.body;
    const transaction = await Transaction.create({
        name, description, datetime, price
    });
    res.json(transaction);
})

app.listen(PORT);