import NavBar from "@/components/NavBar";
import { GeneroItem } from "./GeneroItem";
import { Button } from "@nextui-org/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { getGeneros } from "@/app/actions/generos/get";

interface Genero {
  id: number,
  nome: string,
  icone: string
}

export default async function Generos() {
  const generos: Genero[] = await getGeneros()

  return (
    <main className="px-6 py-12 flex items-center gap-72 bg-center bg-cover h-screen" style={{ backgroundImage: "url('/Genero.jpg')" }}>
      <NavBar active="generos" />
      <div>
        <div className="items-center flex justify-center">
          <img src="/3.png" alt="logo" className="h-28 w-auto" />
        </div>
        <section className="flex flex-col gap-6 mt-6 p-6 bg-purple-950 rounded-2xl min-w-[500px]">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Generos Cadastradas</h2>
            <Link href="/generos/new">
              <Button color="primary" startContent={<Plus size={18} />}>
                novo genero
              </Button>
            </Link>
          </div>
          {generos.map(genero => <GeneroItem genero={genero} />)}
        </section>
      </div>

    </main>
  );
}
