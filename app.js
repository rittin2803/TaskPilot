// Creating an instance of express application
const express = require('express');
const app = express(); 
// Mounting the route
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect')
require('dotenv').config();

// middleware
app.use(express.json()); // for reading json from Body


// Routes
// get - getting, post - new task
// patch - update, delete, get - info about 1

app.use('/api/v1/tasks', tasks);

const port = 3000;

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {console.log(`Server is running on ${port}...`)});
        //app.list(port, callbackFunction)

    } catch (error) {
        console.log(error);
    }
}

start()


