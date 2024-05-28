"use client"

import { create } from "@/app/actions/generos/create";
import { icons } from "@/app/utils/icons";
import NavBar from "@/components/NavBar";
import { SubmitButton } from "@/components/SubmitButton";
import { Autocomplete, AutocompleteItem, Button, Input } from "@nextui-org/react";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { useFormState } from "react-dom";

export default function FormGeneros() {
  const initialState = {
    message: ""
  }

  const [state, formAction] = useFormState(create, initialState)
  return (
    <main className="px-6 py-12 flex items-center gap-72 bg-center bg-cover h-screen" style={{ backgroundImage: "url('/Genero.jpg')" }}>
      <NavBar active="generos" />
      <div>
      <div className="items-center flex justify-center">
          <img src="/3.png" alt="logo" className="h-28 w-auto" />
        </div>
      <form action={formAction} className="flex flex-col gap-6 mt-6 p-6 bg-purple-950 rounded-2xl min-w-[500px]">
        <h2 className="text-2xl font-bold">Cadastrar Genero</h2>
        <Input
          key="nome"
          label="Nome"
          name="nome"
          variant="bordered"
          labelPlacement="outside"
          isInvalid={state?.message != ""}
          errorMessage={state?.message}
        />

        <Autocomplete
          label="Ícone"
          placeholder="procurar ícone..."
          variant="bordered"
          labelPlacement="outside"
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
      </div>
    </main>
  );
}
