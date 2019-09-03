const express=require('express');
const router=express.Router();
const {MongoClient,ObjectID} =require('mongodb');
const bodyParser =require('body-parser');
const assert =require('assert');

const app =express();
app.use(bodyParser.json());

const mongo_url='mongodb://localhost:27017'
const database='synonymetest'

MongoClient.connect(mongo_url, { useNewUrlParser: true },(err,client)=>{
    assert.equal(err,null,'database connection failled') 
    const db=client.db(database)
    //Afficher les synonymes de la base de données
    app.get('/Typagedesattributs',(req,res)=>{
        db.collection('synonyme').find().toArray(
            (err,data)=>{
                if (err) res.send("Impossible d'obtenir un synonyme de la base de données")
                else {res.send(data)}
        });
    })
    //Supprimer un synonyme 
    app.delete('/Typagedesattributs/Supprimer/:id', (req, res) => {
        let id = ObjectID(req.params.id);
        db.collection("synonyme").findOneAndDelete(
            { _id: id }, (err, data) => {
                if (err) res.send("On ne peut pas supprimer un synonyme");
                else res.send(data);
        });
    });
    //Modifier un synonyme
    app.put('/Typagedesattributs/EditerSynonyme/:id', (req,res) => {
        let id = ObjectID(req.params.id);
        let body=req.body
        db.collection("synonyme").findOneAndUpdate({_id : id},{$set : {...body}},
            (err,data)=>{
                if(err)   res.send("On ne peut pas modifier un synonyme")
                else res.send("synonyme edite ")
        });
    });  
    // Ajouter un synonyme
    app.put('/Typagedesattributs/AjouterSynonyme/:id', (req,res) => {
        let id = ObjectID(req.params.id);
        let body=req.body
        db.collection("synonyme").findOneAndUpdate({_id : id},{$set : {...body}},
            (err,data)=>{
                if(err)   res.send("On ne peut pas ajouter un synonyme")
                else res.send("synonyme ajouter ")
        });
    });  
})

app.listen(3001,(err)=>{
    if(err) console.log('On ne peut pas Connecté')
    else console.log('runing in port 3001')
})