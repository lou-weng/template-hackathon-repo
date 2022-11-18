const { MongoClient } = require("mongodb");

const dotenv = require("dotenv");
dotenv.config();

// Replace the following with your Atlas connection string
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.poah4et.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
