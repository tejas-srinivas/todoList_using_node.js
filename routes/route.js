import express from "express";
import { addTodo , getAllTodos , toggleTodoDone , updateTodo , deleteTodo } from "../controller/todo-controller.js";
// import { getAllTodos } from "../../client/src/redux/actions/index.js";

const route = express.Router();

//it will call the server function such as addTodo,getAlltodos etc
route.post('/todos', addTodo)
route.get('/todos',getAllTodos)
route.get('/todos/:id',toggleTodoDone)
route.put('/todos/:id',updateTodo)
route.delete('/todos/:id',deleteTodo)

export default route