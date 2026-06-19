import { Task } from '../models/taskModel.js';

export const createTask = async (req, res) => {
  try {
    const { title, description, assignedTo, startDate, dueDate, duration, importance, status } = req.body;

    const task = await Task.create({
      user: req.user._id,
      title,
      description,
      assignedTo,
      startDate,
      dueDate,
      duration,
      importance,
      status,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message || 'Unable to create task.' });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message || 'Unable to fetch tasks.' });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate('comments.user', 'name email');
    if (!task) {
      return res.status(404).json({ error: 'Task not found.' });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message || 'Unable to fetch task.' });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      {
        title: req.body.title,
        description: req.body.description,
        assignedTo: req.body.assignedTo,
        startDate: req.body.startDate,
        dueDate: req.body.dueDate,
        duration: req.body.duration,
        importance: req.body.importance,
        status: req.body.status,
      },
      { new: true, runValidators: true }
    );

    if (!task) {
      return res.status(404).json({ error: 'Task not found.' });
    }

    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message || 'Unable to update task.' });
  }
};

export const addTaskComment = async (req, res) => {
  try {
    const { content } = req.body;

    if (!content || !content.trim()) {
      return res.status(400).json({ error: 'Comment content is required.' });
    }

    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ error: 'Task not found.' });
    }

    task.comments.push({
      user: req.user._id,
      content: content.trim(),
    });

    await task.save();
    await task.populate('comments.user', 'name email');

    const savedComment = task.comments[task.comments.length - 1];
    res.status(201).json(savedComment);
  } catch (error) {
    res.status(400).json({ error: error.message || 'Unable to add comment.' });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    if (!task) {
      return res.status(404).json({ error: 'Task not found.' });
    }
    res.status(200).json({ message: 'Task deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Unable to delete task.' });
  }
};
