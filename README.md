
# Task Management API

A simple and efficient RESTful API built with **Node.js**, **Express**, and **MongoDB** for managing tasks. This project allows users to create, read, update, and delete tasks while incorporating features like validation, filtering, and pagination.

---

## 🚀 Published Link

Access the live API: [Task Management API](https://task-management-nodejs.onrender.com)

---

## 📋 Features

- **CRUD Operations**: Create, Read, Update, and Delete tasks.
- **Validation**: Schema validation using **Joi** for secure and consistent data input.
- **Filtering**: Query tasks by `status`, `priority`, and `overdue` attributes.
- **Pagination**: Manage large datasets efficiently using pagination.
- **Error Handling**: Centralized error handling middleware for improved debugging.
- **Scalable Structure**: Modular and maintainable codebase with clear separation of concerns.

---

## 🛠️ Tech Stack

- **Node.js**: JavaScript runtime for server-side programming.
- **Express.js**: Web framework for building APIs.
- **MongoDB**: NoSQL database for storing tasks.
- **Mongoose**: ODM library for MongoDB.
- **Joi**: Validation library for request data.
- **Nodemon**: For seamless development with auto-restarts.

---

## 📂 Project Structure

```
project/
├── src/
│   ├── models/
│   │   └── Task.js          # Mongoose Task schema and model
│   ├── routes/
│   │   └── tasks.js         # Task routes and controllers
│   ├── validation/
│   │   └── taskValidation.js # Joi validation schema
│   ├── middleware/
│   │   └── errorHandler.js  # Centralized error handling middleware
│   ├── config/
│   │   └── db.js            # MongoDB connection setup
│   ├── app.js               # Express app initialization
│   └── server.js            # Entry point to start the server
├── .env                     # Environment variables
├── .gitignore               # Git ignore file
├── package.json             # Dependencies and scripts
├── README.md                # Project setup and usage guide
└── postman_collection.json  # API testing collection
```

---

## 🌐 API Endpoints

### Base URL: `https://task-management-nodejs.onrender.com`

| Method | Endpoint                  | Description                     |
|--------|---------------------------|---------------------------------|
| GET    | `/tasks`                  | Retrieve all tasks             |
| GET    | `/tasks/:id`              | Retrieve a specific task by ID |
| POST   | `/tasks`                  | Create a new task              |
| PUT    | `/tasks/:id`              | Update an existing task        |
| PATCH  | `/tasks/:id`              | Update partial fields of a task|
| DELETE | `/tasks/:id`              | Delete a task                  |

### Query Parameters

| Parameter | Description                          |
|-----------|--------------------------------------|
| `status`  | Filter tasks by their status        |
| `priority`| Filter tasks by their priority      |
| `overdue` | Retrieve tasks with past due dates  |
| `page`    | Specify page number for pagination  |
| `limit`   | Specify number of tasks per page    |

---

## 🧰 Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-management-api.git
   cd task-management-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root:
   ```plaintext
   PORT=3000
   MONGO_URI=<MongoDB Connection String>
   ```

4. Start the server:
   - Development mode:
     ```bash
     npm run dev
     ```
   - Production mode:
     ```bash
     npm start
     ```

5. Access the API at `http://localhost:3000`.

---

## 📖 API Testing

Use the `postman_collection.json` file provided in the repository to test all API endpoints with **Postman**.  

---

## 💬 Queries and Feedback

If you have any questions or feedback about this project, feel free to open an issue in the repository or reach out at hussain2k47@gmail.com
