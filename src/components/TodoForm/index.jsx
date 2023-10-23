import { Input } from "./Input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { TodoFormSchema } from "./TodoFormSchema"
import styles from "./style.module.scss"


export const TodoForm = () => {
    const { register, handleSubmit, formState:{errors}} = useForm({
        resolver: zodResolver(TodoFormSchema)
    })

    const submit = (formData) => {

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