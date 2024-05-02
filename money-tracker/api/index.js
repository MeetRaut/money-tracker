// index.js

const express = require('express');
const cors = require('cors')
require('dotenv').config();
const Transaction = require('./models/transaction.js');
const { default: mongoose } = require('mongoose');
const app = express();

const PORT = 4000;
// const MONGO_URL="mongodb+srv://money:uygfuk231gj@cluster0.bgqgi3l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

app.use(cors());
app.use(express.json());
// Define the route handler
app.get('/', (req, res) => {
    res.json('test ok4');
});

app.post('/api/transaction', async(req, res) =>{
    await mongoose.connect(process.env.MONGO_URL);
    const {name, description, datetime, price} = req.body;
    const transaction = await Transaction.create({
        name, description, datetime, price
    });
    res.json(transaction);
})

app.get('/api/transactions', async(req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const Transactions = await Transaction.find();

    res.json(Transactions);
})

app.get('/api/transactions', async(req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const transactions = await Transaction.find();
    res.json(transactions);
});

app.listen(PORT);