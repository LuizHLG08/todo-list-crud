import { useContext } from "react"
import styles from "./style.module.scss"
import { TodoContext } from "../../../providers/TodoContext"

export const TodoCard = ({todo}) => {
    
    const { setEditingTodo, setDeletingTodo} = useContext(TodoContext)

    return (
        <li className={styles.card}>
            <div className={styles.cardInfo}>
                <h2>{todo.title}</h2>
                <p>{todo.content}</p>
            </div>
            <div className={styles.cardButtons}>
                <button className={styles.edit} onClick={() => setEditingTodo(todo)}>Editar</button>
                <button className={styles.delete} onClick={() => setDeletingTodo(todo.id)}>Excluir</button>
            </div>
        </li>
    )
}