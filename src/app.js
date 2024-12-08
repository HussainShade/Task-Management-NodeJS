const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const tasksRoutes = require('./routes/tasks');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use('/tasks', tasksRoutes);
app.use(errorHandler);

module.exports = app;
