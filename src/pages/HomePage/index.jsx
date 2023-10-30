import { useContext } from "react"
import { Header } from "../../components/Header"
import { TodoForm } from "../../components/TodoForm"
import { TodoList } from "../../components/TodoList"
import { TodoContext } from "../../providers/TodoContext"
import { EditTodoModal } from "../../components/EditTodoModal"
import { DeleteTodoModal } from "../../components/DeleteTodoModal"

export const HomePage = () => {

    const { editingTodo, deletingTodo } = useContext(TodoContext)

    return (
        <>
            <Header />
            <TodoForm />
            <TodoList />
            {editingTodo ? <EditTodoModal /> : null}
            {deletingTodo ? <DeleteTodoModal /> : null}
        </>
    )
}