const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const { taskValidationSchema } = require('../validation/taskValidation');

// Create Task
router.post('/', async (req, res, next) => {
  try {
    const { error } = taskValidationSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
});

// Get Tasks with Pagination, Filtering, Sorting
router.get('/', async (req, res, next) => {
  try {
    const { status, priority, sort, limit = 10, skip = 0 } = req.query;
    const query = {};
    if (status) query.status = status;
    if (priority) query.priority = priority;

    const tasks = await Task.find(query)
      .sort(sort ? { [sort]: 1 } : {})
      .limit(Number(limit))
      .skip(Number(skip));
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

// Get Task by ID
router.get('/:id', async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (err) {
    next(err);
  }
});

// Update Task
router.put('/:id', async (req, res, next) => {
  try {
    const { error } = taskValidationSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (err) {
    next(err);
  }
});

// Delete Task
router.delete('/:id', async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
