const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  due_date: String,
  status: { type: String, enum: ['To Do', 'En Cours', 'Done'], default: 'To Do' },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
