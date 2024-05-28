"use server"

import { redirect } from "next/navigation"

interface ValidationMessages {
    campo: string,
    mensagem: string
}

export async function create(prevState: any, formData: FormData) {

    const data = {
      nome: formData.get("nome"),
      icone: formData.get("icone")
    }

    const options = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }

    const resp = await fetch("http:localhost:8080/genero", options)

    if (resp.ok){
        redirect("/generos")
    }

    if (!resp.ok){
        const messages: Array<ValidationMessages> = await resp.json()
        return {
            message: messages.find(m => m.campo == "nome")?.mensagem
        }
    }

  }