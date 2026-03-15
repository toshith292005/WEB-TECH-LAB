const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

const dbName = "webtechDB";

async function run(){

await client.connect();

console.log("Connected to MongoDB");

const db = client.db(dbName);

const collection = db.collection("students");


// CREATE
await collection.insertOne({
name:"Toshith",
regNo:"23BCE8216",
branch:"CSE",
marks:90
});

console.log("Document inserted");


// READ
const students = await collection.find().toArray();

console.log("All Students:", students);


// UPDATE
await collection.updateOne(
{name:"Toshith"},
{$set:{marks:95}}
);

console.log("Document updated");


// DELETE
await collection.deleteOne({name:"Toshith"});

console.log("Document deleted");

await client.close();

}

run();
