"use client"

import DropdownAction from "@/components/DropdownAction";
import { Icon } from "@/components/Icon";
import { destroy } from "../actions/generos/destroy";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface GeneroItemProps {
    genero: {
        id: number,
        nome: string,
        icone: string
    }
}

export function GeneroItem({ genero }: GeneroItemProps) {
    const router = useRouter()

    function handleDelete() {
        toast.promise(
            destroy(genero.id),
            {
                loading: 'apagando...',
                success: "apagado com sucesso",
                error: "erro ao apagar",
            }
        );
    }

    return (
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <Icon name={genero.icone} />
                <span>{genero.nome}</span>
            </div>
            <DropdownAction
                onEdit={() => { router.push("/generos/" + genero.id) }}
                onDelete={handleDelete}
            />
        </div>
    )
}