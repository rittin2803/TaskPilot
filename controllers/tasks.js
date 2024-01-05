// Seperating logic from HTTP Requests.

// Using the Schema
const Task = require('../models/Task')

// Get All Tasks
const getAllTasks = async (req, res) =>{
   try {
    const tasks = await Task.find({}); // returns all
    res.status(200).json({ tasks })
   } catch (error) {
    res.status(500).json({msg:error});
   } 
}

// Create Task
const createTask = async (req, res) =>{
    try {
        const task = await Task.create(req.body); // creates new into model
        res.status(201).json({ task }); // Piping
    } catch (error) {
        res.status(500).json({ msg:error });
    }
}

// Get single task
const getTask = async (req, res) =>{
    try {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID});

        // If task is not there - handled by ourself
        if(!task){
            return res.status(400).json({msg: `No task with id: ${taskID}`})
        }

        res.status(200).json({ task });
    } catch (error) {
        // When wrong syntax errors occur - Generic
        res.status(500).json({ msg:error });
    }
}

// Delete a Task
const deleteTask = async (req, res) =>{
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID});

        if(!task){
            return res.status(404).json({ msg: `No task with id ${taskID}`});
        }

        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg:error })
    }
}

// Update a Task
const updateTask = async (req, res) =>{
    try {
        const {id:taskID} = req.params

        const task = await Task.findOneAndUpdate({_id:taskID}, req.body,{new: true, runValidators:true,});

        res.status(200).json({ task })
    } catch (error) {
        
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}