"use server"

export async function getGeneros() {

    const resp = await fetch("http://localhost:8080/genero", { next: { revalidate: 0 } })
    return await resp.json()
}