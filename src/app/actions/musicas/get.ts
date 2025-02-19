'use server'

export async function get(genero?: any, mes?: number, page?: number) {
    if (!page) page = 1
    page = page - 1

    const queryParam = new URLSearchParams()
    if (genero) queryParam.append('genero', genero)
    if (mes) queryParam.append('mes', mes.toString())
    queryParam.append('page', page.toString())

    const url = `http://localhost:8080/musica?${queryParam.toString()}`
    const resp = await fetch(url, { next: { revalidate: 0 } })
    const json = await resp.json()
    return json

}