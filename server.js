const express = require('express'); // Import the Express library

const app = express() // Create an instance of the Express application

app.get("/", (req, res) =>  { // Define a route for the root URL ("/")
    res.send("Hello World")
})
app.get("/about", (req, res) => { // Define a route for the "/about" URL
    res.send("This is the about page")
})
app.listen(3000, () => { // Start the server and listen on port 3000
    console.log("Server is running on port 3000")
})  
