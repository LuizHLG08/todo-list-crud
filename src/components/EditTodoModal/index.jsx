import { useContext } from "react"
import { Input } from "../TodoForm/Input"
import { TodoContext } from "../../providers/TodoContext"
import styles from "./style.module.scss"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { editTodoFormSchema } from "./editTodoFormSchema"

export const EditTodoModal = () => {

    const { editingTodo, setEditingTodo, editTodo } = useContext(TodoContext)

    const { register, handleSubmit, formState:{errors}} = useForm({
        resolver: zodResolver(editTodoFormSchema),
        values: {
            title: editingTodo.title,
            content: editingTodo.content,
        }
    })

    const submit = (formData) => {
        editTodo(formData)
    }


    return (
        <div className="modalOverlay">
            <div className="modalContainer">
                <div className="modalHeader">
                    <h2>Editar</h2>
                    <button className={styles.close} onClick={() => setEditingTodo(null)}>X</button>
                </div>
                <form className={styles.editTechForm} onSubmit={handleSubmit(submit)}>
                    <Input label="Nome" type="text" placeholder="Digite uma titulo..." {...register("title")} error={errors.title} />
                    <Input label="Nome" type="text" placeholder="Digite uma tarefa..." {...register("content")} error={errors.content} />
                    <button className={styles.submit} type="submit">Salvar alterações</button>
                </form>
            </div>
        </div>
    )
}