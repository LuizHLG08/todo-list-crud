import { createContext, useEffect, useState } from "react"
import { api } from "../services/api"
import { toast } from "react-toastify"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export const TodoContext = createContext({})

export const TodoProvider = ({ children }) => {
    
    const [editingTodo, setEditingTodo] = useState(null)
    const [deletingTodo, setDeletingTodo] = useState(null)

    const queryClient = useQueryClient()

    const revalidate = () => {
        queryClient.invalidateQueries({queryKey: ["todos"]})
    }

    const { data: todoList } = useQuery({
        queryKey: ["todos"],
        queryFn: async () => {
            const { data } = await api.get("/tasks")
            return data
        }
    })

    const createTodo = useMutation({
        mutationFn: async (formData) => {
            return await api.post("/tasks", formData)
        },
        onSuccess: () => {
            revalidate()
            toast.success("Tarefa criada com sucesso!")
        },
        onError: () => {
            toast.error("Não foi possível criar tarefa!")
        }
    })

    const editTodo = useMutation({
        mutationFn: async (formData) => {
            return await api.put(`/tasks/${editingTodo.id}`, formData)
        },
        onSuccess: () => {
            revalidate()
            toast.success("Tarefa editada com sucesso!")
        },
        onError: () => {
            toast.error("Não foi possível editar tarefa!")
        }
    })

    const deleteTodo = useMutation({
        mutationFn: async () => {
            return await api.delete(`/tasks/${deletingTodo}`)
        },
        onSuccess: () => {
            revalidate()
            toast.success("Tarefa removida com sucesso!")
        },
        onError: () => {
            toast.error("Não foi possível remover tarefa!")
        }
    })


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