"use server"

import { redirect } from "next/navigation"

export async function destroy(id: number){
    // await new Promise(r => setTimeout(r, 4000))

    const resp = await fetch("http://localhost:8080/genero/" + id , { method: "delete"})

    if (resp.ok){
        redirect("/generos")    
    }

    if (!resp.ok){
        throw new Error("erro ao apagar genero")
    }
}