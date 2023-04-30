const express = require('express')
const app = express();
const mongo = require("mongodb")

connectDB().then(zenCollection=> {
    app.get('/p/:id', async (req, res) => {
        try {
        console.log("requesting image " + req.params.id)
        res.send(await zenCollection.findOne(new mongo.ObjectId(req.params.id)));

        }catch (e){
            res.status(404).send()
        }
    });

    app.listen(3000);
    console.log("ready")
});

async function connectDB(){
    const MongoClient = mongo.MongoClient
    const client = await MongoClient.connect('mongodb://localhost:27017');
    return client.db("zen").collection("zen");
}

