"use server"

export async function getTotaisPorGenero() {
    const resp = await fetch("http:localhost:8080/musica/totais-por-genero")
    return await resp.json()

}