import { Input } from "./Input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { todoFormSchema } from "./todoFormSchema"
import styles from "./style.module.scss"
import { useContext } from "react"
import { TodoContext } from "../../providers/TodoContext"


export const TodoForm = () => {
    const { createTodo } = useContext(TodoContext)
    const { register, handleSubmit, reset, formState:{errors}} = useForm({
        resolver: zodResolver(todoFormSchema)
    })

    const submit = (formData) => {
        createTodo.mutate(formData)
        reset()
    }
    
    return (
        <form onSubmit={handleSubmit(submit)} className={styles.form}>
            <div className={styles.formHeader}>
                <h2>Adicione uma tarefa</h2>
            </div>
            <div className={styles.inputsContainer}>
                <Input label="Título: " type="text" placeholder="Digite um título" {...register("title")} error={errors.title} />
                <Input label="Tarefa: " type="text" placeholder="Digite uma tarefa" {...register("content")} error={errors.content} />
                <button type="submit">Criar</button>
            </div>
        </form>
    )
}