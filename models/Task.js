const mongoose = require('mongoose');

// Structure for documents
const TaskSchema =  new mongoose.Schema({
    name:String,
    completed:Boolean
})

module.export = mongoose.model('Task', TaskSchema);

