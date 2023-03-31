import React, {useState}from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();


function TodoProvider(props) {
    //Estados
    const [searchValue, setSearchValue] = useState('');
    const [openModal,setOpenModal] = useState('');


    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
        setError
      } = useLocalStorage('TODOS_V1', []);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];


    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        try{
            searchedTodos = todos.filter(todo => {
                const todoText = todo.text.toLowerCase();
                const searchText = searchValue.toLowerCase();
                return todoText.includes(searchText);
            });
        }catch(error){
            setError(error);
        }
        
    }


    const completeTodo = (text) => {
        //Busca el todo que concida con el valor text
        const todoIndex = todos.findIndex(todo => todo.text === text);
        // Creamos un nuevo array para despues actulizar el estado de todos
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    }


    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    const addTodo = (todo) => {
        const oldTodos = [...todos];
        oldTodos.push(todo);
        saveTodos(oldTodos);
    }

    return (
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext,TodoProvider}