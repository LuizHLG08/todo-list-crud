import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const TodoContext = createContext({})

export const TodoProvider = ({children}) => {
    const [todoList, setTodoList] = useState([])

    

    return (
        <TodoContext.Provider value={{todoList}}>
            {children}
        </TodoContext.Provider>
    )
}