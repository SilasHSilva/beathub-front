"use client"

import { icons } from "@/app/utils/icons";
import { SubmitButton } from "@/components/SubmitButton";
import { Autocomplete, AutocompleteItem, Button, Input } from "@nextui-org/react";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { useFormState } from "react-dom";
import { update } from "@/app/actions/generos/update";

interface EditFormProps {
    genero: Genero
}

export function EditForm({genero}: EditFormProps){
    const initialState = {
        message: ""
      }
    
    const [state, formAction] = useFormState(update, initialState)

    return (
        <form action={formAction} className="flex flex-col gap-6 mt-6 p-6 bg-purple-950 rounded-2xl min-w-[500px]">
        <input type="hidden" name="id" value={genero.id} />
        
        <h2 className="text-2xl font-bold">Editar Genero {genero.nome}</h2>
        <Input
          key="nome"
          label="Nome"
          name="nome"
          variant="bordered"
          labelPlacement="outside"
          defaultValue={genero.nome}
          isInvalid={state?.message != ""}
          errorMessage={state?.message}
        />

        <Autocomplete
          label="Ícone"
          placeholder="procurar ícone..."
          variant="bordered"
          labelPlacement="outside"
          defaultInputValue={genero.icone}
          name="icone"
          defaultItems={icons}
        >
          {(item: { name: any; icon: any; }) => <AutocompleteItem key={item.name} startContent={item.icon} >{item.name}</AutocompleteItem>}
        </Autocomplete>

        <div className="flex justify-around mt-4">
          <Link href="/generos">
            <Button variant="bordered" startContent={<ArrowLeft size={18} />}>cancelar</Button>
          </Link>

          <SubmitButton />
        </div>
      </form>
    )
}