import { useContext } from "react"
import styles from "./style.module.scss"
import { TodoContext } from "../../providers/TodoContext"


export const DeleteTodoModal = () => {

    const { setDeletingTodo, deleteTodo } = useContext(TodoContext)

     return (
        <div className="modalOverlay">
            <div className="modalContainer">
                <div className="modalHeader">
                    <h2>Apagar</h2>
                    <button className={styles.close} onClick={() => setDeletingTodo(null)}>X</button>
                </div>
                <div className={styles.modalContent}>
                    <h2>Tem certeza que deseja apagar o item?</h2>
                    <button onClick={() => deleteTodo()}>Apagar</button>
                </div>
            </div>
        </div>
    )
}