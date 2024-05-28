"use server"
export async function getById(id: number) {
    const response = await fetch(`http://localhost:8080/genero/${id}`)

    if (!response.ok) {
        throw new Error('genero não encontrado')
    }

    return await response.json()
}