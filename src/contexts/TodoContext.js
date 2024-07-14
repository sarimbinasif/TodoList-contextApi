import { useContext, createContext } from "react";

// inside createContext there are default values and fucntion
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todoMsg: "Todo list text",
            taskCompleted: false,
        }
    ],
    addTodo: (todoMsg) => {},
    editTodo: (id, todoMsg) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const TodoProvider = TodoContext.Provider

// using useTodo() we can access  todos[], addTodo(),editTodo(),
// deleteTodo(), toggleComplete()
export default function useTodo(){
    return useContext(TodoContext)
}