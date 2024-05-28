'use client'

import { Select, SelectItem } from "@nextui-org/react";
import { ChangeEventHandler } from "react";
import { Icon } from "./Icon";

interface GeneroSelectProps  {
    generos: Array<Genero>,
    onChange?: ChangeEventHandler
}

export function GeneroSelect({generos, onChange}: GeneroSelectProps) {

    return (
        <Select
            items={generos}
            label="Genero"
            variant="bordered"
            name="genero"
            placeholder="Selecione um genero"
            labelPlacement="outside"
            onChange={onChange}
        >
            {(genero: { id: any; nome: any; icone: string; }) => 
                <SelectItem key={genero.id} startContent={<Icon name={genero.icone} />}>
                    {genero.nome}
                </SelectItem>
            }
        </Select>
    )
}