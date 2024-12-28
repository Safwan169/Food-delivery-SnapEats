const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const cors = require('cors')
require('dotenv').config()

app.use(cors(['http://localhost:5173']))





const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://<db_username>:<db_password>@cluster0.6zehkma.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.6zehkma.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
   const database= await client.db("SnapEats")
   const restaurantDataEng= await database.collection('restaurantDataEng')
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection

    app.get('/restaurant',async(req,res) => {


      const text=req.query.value
      console.log(text,'thsi is for query')

    let result

      if (text.toLowerCase()=='all') {
        
      

    
        result= await restaurantDataEng.find().toArray()
      }

      else{

         result = await restaurantDataEng.find({
        name: { $regex: text, $options: 'i' }
      }).toArray();      }
        console.log(result,'this is a successful')
        res.json(result)
        
    })


    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})