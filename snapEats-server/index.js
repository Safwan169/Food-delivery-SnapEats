const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const cors = require('cors')
require('dotenv').config()

app.use(cors(['http://localhost:5173','https://food-delivery-snap-eats-gs1a.vercel.app']))





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
        // console.log(result,'this is a successful')
        res.json(result)
        
    })

    app.get('/search',async(req,res) => {


      const text=req.query.value
      if (text=='all') {
     const food = await restaurantDataEng.find().toArray()


     console.log(food,'this is for searhing')
     res.json(food)
        
      }
      else{

        const query = {
          $or: [
            { name: { $regex: text, $options: "i" } },
            { "foods.category": { $regex: text, $options: "i" } }
          ]
        };
        
        const projection = {
          name: 1,
          image: 1,
          rating: 1,
          deliveryTime: 1,
          type: 1,
          address: 1,
          minimumAmountForFreeDelivery: 1,
          isFreeDelivery: 1,
          foods: {
            $elemMatch: { category: { $regex: text, $options: "i" } } // Filter foods array
          }
        };

        const food = await restaurantDataEng.find(query, { projection }).toArray()

        res.json(food)
      }


    })


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