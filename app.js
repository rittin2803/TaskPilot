// Creating an instance of express application
const express = require('express');
const app = express(); 
const tasks = require('./routes/tasks');    // Mounting the route
const connectDB = require('./db/connect')   // DB Connection
require('dotenv').config();

// Middleware
app.use(express.static('public'))
app.use(express.json()); // for reading json from Body


// Routes
// get - getting, post - new task
// patch - update, delete, get - info about 1

app.use('/api/v1/tasks', tasks);

const port = process.env.PORT;

const start = async () =>{
    try {
        // Asychronous operation
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is running on ${port}...`)
        });
        //app.listen(port, callbackFunction)

    } catch (error) {
        console.log(error);
    }
}

start()


