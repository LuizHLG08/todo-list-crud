import { z } from "zod"


export const editTodoFormSchema = z.object({
    title: z.string().min(1, "Titulo é obrigatório!"),
    content: z.string().min(1, "Titulo é obrigatório!"),
})