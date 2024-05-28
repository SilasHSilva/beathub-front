interface Genero {
    id: number,
    nome: string,
    icone: string
}

interface Musica {
    id: number,
    musica:string,
    artista: string,
    data: string,
    genero: Genero
    
}