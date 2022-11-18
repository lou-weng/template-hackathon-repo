const { MongoClient } = require("mongodb");

const dotenv = require("dotenv");
dotenv.config();

// Replace the following with your Atlas connection string
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.poah4et.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url);

// The database to use
const dbName = "testDB";

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db(dbName);

    // Use the collection "users"
    const col = db.collection("users");

    // Construct a document
    let userDocument = {
      name: { first: "Alan", last: "Turing" },
      createdOn: new Date(2022, 11, 1),
      toSend: new Date(2022, 12, 1),
      newsletters: ["Happy Holidays"],
      subscribers: 100,
    };

    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(userDocument);
    // Find one document
    const myDoc = await col.findOne();
    // Print to the console
    console.log(myDoc);
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
