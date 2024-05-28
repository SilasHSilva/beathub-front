"use client"

import DropDownActions from "@/components/DropdownAction";
import { Icon } from "@/components/Icon";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { destroy } from "../actions/musicas/destroy";



interface MusicaItemProps {
    musica: Musica
}

export function MusicaItem({ musica }: MusicaItemProps) {
    const router = useRouter()

    function handleDelete() {
        toast.promise(
            destroy(musica.id),
            {
                loading: "apagando...",
                success: "apagado com sucesso",
                error: "erro ao apagar",
            }
        );

    }

    return (
        <div className="flex justify-between p-2 rounded cursor-pointer items-center">
            <div className="flex gap-3 items-center">
                <Icon name={musica.genero.icone} />
                <span className="bg-slate-950 rounded-2xl p-2 w-80 text-center">{musica.musica}</span>
                <span className="bg-slate-950 rounded-2xl p-2 w-80 text-center">{musica.artista}</span>
                <span className="bg-slate-950 rounded-2xl p-2 w-56 text-center">{musica.data}</span>
                
            </div>
            <div className="flex gap-2 items-center">
                <DropDownActions
                    onDelete={handleDelete}
                    onEdit={() => toast("não implementado")}
                />
            </div>
        </div>
    )
}