# Todo App

A simple Todo App built with **Node.js, Express, MongoDB, and React** to manage tasks efficiently.

 ## For testing purpose.

## Features
- Add new todos
- Fetch all todos
- Store todos in MongoDB
- Simple UI with React

## Technologies Used
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: React.js
- **Others**: Cors, Body-Parser, Nodemon

## Setup Instructions
### 1. Clone the repository
```sh
git clone https://github.com/yourusername/todo_app.git
cd todo_app
```

### 2. Install dependencies
#### Backend
```sh
cd todo-backend
npm install
```
#### Frontend
```sh
cd ../todo-frontend
npm install
```

### 3. Create an `.env` file in `todo-backend`
```env
MONGO_URI=your_mongodb_connection_string
PORT=3001
```

### 4. Run the application
#### Start the backend
```sh
cd todo-backend
npm start
```
#### Start the frontend
```sh
cd ../todo-frontend
npm start
```

## API Endpoints
### 1. Get all Todos
```http
GET /get-todo
```
### 2. Add a Todo
```http
POST /add-todo
Content-Type: application/json
{
  "todo": "Your new task"
}
```

## License
This project is open-source and free to use.

---
### Contribution
Feel free to fork and contribute to this project by submitting a pull request.

