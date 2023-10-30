import { createContext, useEffect, useState } from "react"
import { api } from "../services/api"
import { toast } from "react-toastify"

export const TodoContext = createContext({})

export const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState([])
    const [editingTodo, setEditingTodo] = useState(null)
    const [deletingTodo, setDeletingTodo] = useState(null)

    useEffect(() => {
        const getTodoList = async () => {
            try {
                const { data } = await api.get("/tasks")
                setTodoList(data)
            } catch (error) {
                toast.error("Ops! Algo deu errado")
            }
        }
        getTodoList()
    }, [])

    const createTodo = async (formData) => {
        try {
            const { data } = await api.post("/tasks", formData)
            setTodoList([...todoList, data])
            toast.success("Tarefa criada com sucesso!")
        } catch (error) {
            toast.error("Não foi possível criar tarefa!")
        }
    }

    const editTodo = async (formData) => {
        try {
            const { data } = await api.put(`/tasks/${editingTodo.id}`, formData)
            const newTodoList = todoList.map(todo => {
                if (todo.id === editingTodo.id) {
                    return data
                } else {
                    return todo
                }
            })
            setTodoList(newTodoList)
            setEditingTodo(null)
            toast.success("Tarefa editada com sucesso!")
        } catch (error) {
            toast.error("Não foi possível editar tarefa!")
        }
    }

    const deleteTodo = async () => {
        try {
            await api.delete(`/tasks/${deletingTodo}`)
            const newTodoList = todoList.filter(todo => todo.id !== deletingTodo)
            setTodoList(newTodoList)
            setDeletingTodo(null)
            toast.success("Tarefa removida com sucesso!")
        } catch (error) {
            toast.error("Não foi possível remover tarefa!")
        }
    }


    return (
        <TodoContext.Provider value={
            {
                todoList,
                editingTodo,
                setEditingTodo,
                deletingTodo,
                setDeletingTodo,
                createTodo,
                editTodo,
                deleteTodo,
            }}>
            {children}
        </TodoContext.Provider>
    )
}