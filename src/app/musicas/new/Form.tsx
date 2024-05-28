'use client'

import { create } from "@/app/actions/musicas/create";
import { GeneroSelect } from "@/components/GeneroSelect";
import { SubmitButton } from "@/components/SubmitButton";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import { useFormState } from "react-dom";


const initialState = {
    message_musica: '',
    message_artista: '',
    message_data: '',
}


export function Form(props: { generos: Array<Genero> }) {
    const { generos } = props

    const [state, formAction] = useFormState(create, initialState)
    return (
        <form action={formAction} className="flex flex-col gap-2 mt-6 p-6 bg-purple-950 rounded-2xl min-w-[500px]">
            <h2 className="text-2xl font-bold">Nova Musica</h2>
            <Input
                key="musica"
                label="Música"
                name="musica"
                variant="bordered"
                labelPlacement={"outside"}
                isRequired={true}
                isInvalid={state?.message_musica != ''}
                errorMessage={state?.message_musica}
            />

            <Input
                key="artista"
                label="Artista"
                name="artista"
                variant="bordered"
                labelPlacement={"outside"}
                isRequired={true}
                isInvalid={state?.message_artista != ''}
                errorMessage={state?.message_artista}
            />


            <Input
                key="data"
                type="date"
                label="Data"
                name="data"
                variant="bordered"
                labelPlacement={"outside"}
                isRequired={true}
                isInvalid={state?.message_data != ''}
                errorMessage={state?.message_data}
            />

            <GeneroSelect generos={generos} />

            <div className="flex justify-around mt-4">
                <Link href="/musicas">
                    <Button variant="bordered" >cancelar</Button>
                </Link>
                <SubmitButton></SubmitButton>
            </div>
        </form>
    )
}