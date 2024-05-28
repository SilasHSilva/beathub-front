'use client'

import { GeneroSelect } from "@/components/GeneroSelect";
import { MesesSelect } from "@/components/MesesSelect";
import { Button, Pagination } from "@nextui-org/react";
import { Filter, Plus } from "lucide-react";
import Link from "next/link";
import { MusicaItem } from "./MusicaItem";
import { useEffect, useState } from "react";
import { get } from "../actions/musicas/get";

interface MusicaDataProps {
    musicas: {
        content: Array<Musica>
    },
    generos: Array<Genero>
}

export function MusicaData({ musicas, generos }: MusicaDataProps) {

    const [filteredmusicas, setFilteredmusicas] = useState(musicas.content)
    const [filter, setFilter] = useState({ genero: '', mes: new Date().getMonth() + 1 })
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(10)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await get(filter.genero, Number(filter.mes), page)
                setFilteredmusicas(data.content)
                setTotalPages(data.totalPages)
            } catch (error) {
                throw new Error("falha ao filtrar músicas.")
            }
        };

        fetchData();
    }, [filter, page]);

    const changeFilter = (e: any) => {
        setFilter({ ...filter, [e.target.name]: e.target.value });
      }
    
      const clearFilter = () => {
        setFilter({ genero: '', mes: new Date().getMonth() + 1 });
      }    

    const handlePageChange = (page: number) => {
        setPage(page);
    }

    return (
        <>
            <section className="flex flex-col gap-2 mt-6 p-6 bg-purple-950 rounded-2xl min-w-[500px]">
                <div className="flex justify-between">
                <h2 className="text-3xl font-bold font-mono">Músicas Cadastradas</h2>
                    <Link href="/musicas/new">
                        <Button color="primary" startContent={<Plus />}>nova música</Button>
                    </Link>
                </div>
                <div className="ml-40 mt-3 text-xl flex justify-between mr-20 font-mono">
                    <h3 className="border-b-2 pl-3 pr-3">Música</h3>
                    <h3 className="ml-28 border-b-2 pl-3 pr-3">Artista</h3>
                    <h3 className="border-b-2 pl-3 pr-3 mr-3">Data de lançamento</h3>
                </div>
                {/* <div className="flex gap-4 items-end border-1 border-white/10 p-4 rounded">
                  <Filter size={44} />
                  <GeneroSelect generos={generos} onChange={changeFilter} />
                  <MesesSelect onChange={changeFilter} mes={filter.mes} />
                  <Button onClick={clearFilter}>limpar</Button>
                </div> */}
                {filteredmusicas.map(musica =>
                    <MusicaItem key={musica.id} musica={musica} />
                )}
                <div className="flex items-center justify-center">
                    <Pagination
                        onChange={handlePageChange}
                        isCompact
                        showControls
                        total={totalPages}
                        page={3}
                    />
                </div>
            </section>


        </>
    )
}