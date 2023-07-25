const express = require('express')
const app = express();
var cors = require('cors')
const mongo = require("mongodb")
const bodyParser = require("body-parser");
app.use(cors())
app.use(bodyParser.json({limit: '50mb'}))

connectDB().then(zenCollection => {
    app.get('/p/:id', async (req, res) => {
        try {
            console.log("requesting image " + req.params.id)
            res.send(await zenCollection.findOne(new mongo.ObjectId(req.params.id)));

        } catch (e) {
            res.status(404).send()
        }
    });

    app.get('/p/', async (req, res) => {
        try {
            console.log("requesting all images")
            const cursor = await zenCollection.find();
            cursor.toArray().then(array => res.send(array))

        } catch (e) {
            res.status(404).send()
        }
    });
    app.post('/add/', async (req, res) => {
        console.log("adding image with caption: " + req.body.caption)
        await zenCollection.insertOne({
            src: req.body.src,
            caption: req.body.caption,
            timestamp: Date.now()
        })

        res.status(201).send(true)

    });
    app.listen(3000);
    console.log("ready")
});

async function connectDB() {
    const MongoClient = mongo.MongoClient
    const client = await MongoClient.connect('mongodb://lenoxy:hallovelo@zen-database:27017');
    return client.db("zen").collection("zen");
}

