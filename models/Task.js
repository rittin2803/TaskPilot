const mongoose = require('mongoose');

// Schema - Structure for documents
const TaskSchema =  new mongoose.Schema({
    // Only these will be passed to database
    // Validation and Error Handling is required
    name: { 
        type: String,
        required: [true, 'Must Provide Name'],
        trim: true,
        maxlength: [20, 'Not more than 20 characters']
    },  
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema);
// model - Representation for collection,  wrapper for schema, Interface (for CRUD)
// document - instance of model

