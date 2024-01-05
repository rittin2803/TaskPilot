const express =  require('express');
const router = express.Router();

const {getAllTasks, createTask, getTask, updateTask, deleteTask} = require('../controllers/tasks');

// Get all and Posting new
router.route('/').get(getAllTasks);
router.route('/').post(createTask);

// Update, GetOne, Delete
router.route('/:id').get(getTask);
router.route('/:id').patch(updateTask);
router.route('/:id').delete(deleteTask);

module.exports = router;