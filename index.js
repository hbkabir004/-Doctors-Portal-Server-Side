const express = require('express');
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
require('dotenv').config()
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fkqwkjt.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const appointmentOptionsCollection = client.db('doctors-portal').collection('appointmentOptions');

        app.get('/appointmentOptions', async (req, res) => {
            const query = {};
            const options = await appointmentOptionsCollection.find(query).toArray();
            res.send(options);
        })


    }
    finally {


    }
}
run().catch(console.dir);



app.get('/', async (req, res) => {
    res.send('Server is running in full swing')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})