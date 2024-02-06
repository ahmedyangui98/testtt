const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/', taskController.addTask);
router.put('/:taskId', taskController.editTask);
router.delete('/:taskId', taskController.deleteTask);
router.get('/', taskController.getTasks);

module.exports = router;
