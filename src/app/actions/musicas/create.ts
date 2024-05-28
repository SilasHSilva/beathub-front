"use server"

import { redirect } from "next/navigation"

export async function create(prevState: any, formData: FormData){

    const date = formData.get("data");
    const partes = String(date).split('-');
    formData.set("data", partes[2] + '/' + partes[1] + '/' + partes[0]);
    
    const data = {
        musica: formData.get("musica"),
        artista: formData.get("artista"),
        data: formData.get("data"),
        genero: {
            id: formData.get("genero")
        },
    }

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }

    }
    const resp = await fetch("http://localhost:8080/musica", options)

    if (resp.ok){
        redirect("/musicas")
    }

    if(resp.status == 400){
        const messages = await resp.json()

        return {
            message_musica: messages["musica"]?.mensagem || '',
            message_artista: messages["artista"]?.mensagem || '',
            message_data: messages["data"]?.mensagem || '',
        }
    }
    
}