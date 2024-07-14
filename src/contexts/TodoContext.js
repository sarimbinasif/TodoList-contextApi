import {createContext, useContext} from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {
        console.log(`Update todo with id: ${id}, new todo: ${todo}`);
    },
    deleteTodo: (id) => {
        console.log(`Delete todo with id: ${id}`);
    },
    toggleComplete: (id) => {
        console.log(`Toggle complete for todo with id: ${id}`);
    }
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;
