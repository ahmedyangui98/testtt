const Task = require('../models/taskModel');

const addTask = async (req, res) => {
  const data = req.body;
  try {
    const newTask = await Task.create(data);
    res.status(201).json({ message: 'Task added successfully', task: newTask });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const editTask = async (req, res) => {
    const { taskId } = req.params;
    const data = req.body;
    try {
      const updatedTask = await Task.findOneAndUpdate({ _id: taskId }, data, { new: true });
      res.json({ message: 'Task updated successfully', task: updatedTask });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

const deleteTask = async (req, res) => {
  const { taskId } = req.params;
  try {
    await Task.findByIdAndDelete(taskId);
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getTasks = async (req, res) => {
  const { status, date, keyword } = req.query;

  const query = {};
  if (status) query.status = status;
  if (date) query.due_date = date;
  if (keyword) query.$or = [{ title: { $regex: keyword, $options: 'i' } }, { description: { $regex: keyword, $options: 'i' } }];

  try {
    const tasks = await Task.find(query).sort({ _id: 1 });
    res.json({ tasks });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { addTask, editTask, deleteTask, getTasks };
