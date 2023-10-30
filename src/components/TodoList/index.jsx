import { useContext } from "react"
import { TodoContext } from "../../providers/TodoContext"
import { TodoCard } from "./TodoCard"
import styles from "./style.module.scss"

export const TodoList = () => {

    const { todoList } = useContext(TodoContext)

    return (
        <ul className={styles.list}>
            {todoList.map(todo => (
                <TodoCard key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}