const mongoose = require('mongoose');

const connectDB = (url) =>{
    return mongoose.connect(url, { 
        useNewUrlParser: true, // passing connString
        useCreateIndex: true, // efficient
        useFindAndModify: false, // for native
        useUnifiedTopology: true, // better support
  })
}

module.exports = connectDB;

// .then(()=> console.log("Connected to Database...")).catch((err)=>console.log(err))