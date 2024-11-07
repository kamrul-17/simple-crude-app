// simple crude operation with node, express and mongoes
const express = require('express');
const mongoose = require('mongoose');
const routerProduct = require('./routes/productRoute');
const app = express();
//Middleware for JSON and links 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Routes for API
app.use("/api/products", routerProduct);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// app.listen(3000, () => {
//     console.log('Server running on port 3000!');
// });


// Run the server
const startServer = async () => {
  try {
    // Start the server
    app.listen(3001, () => {
      console.log("Server listening on port: 3001");
    });
  } catch (error) {
    console.error(error.message);
  }
}

startServer();

//connect to mongodb server

const connectionUri = "mongodb+srv://kamrul17:kamrul17@backenddb.4pcud.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB";

mongoose.connect(connectionUri)
  .then(() => {
    console.log('MongoDB Connected');
    // Start your server logic here (e.g., app.listen)
  })
  .catch(err => {
    console.error('MongoDB Connection Error:', err);
    // Handle connection errors gracefully (e.g., retry or exit)
  });

