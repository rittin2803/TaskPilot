// Seperating logic from HTTP Requests.

const Task = require('../models/Task')

const getAllTasks = (req, res) =>{
    res.send('All items are here');
}

const createTask = (req, res) =>{
    res.json(req.body);
}

const getTask = (req, res) =>{
    res.json({id:req.params.id});
}

const updateTask = (req, res) =>{
    res.send('Update Task');
}

const deleteTask = (req, res) =>{
    res.send('Delete Task');
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}