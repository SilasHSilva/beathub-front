'use client'


import { GeneroSelect } from "@/components/GeneroSelect"
import { MesesSelect } from "@/components/MesesSelect"
import NavBar from "@/components/NavBar"
import { Button } from "@nextui-org/react"
import { Filter } from "lucide-react"
import { useState } from "react"

interface MusicaDataProps {
  musicas: {
      content: Array<Musica>
  },
  generos: Array<Genero>
}

export default function Home({generos, musicas}:MusicaDataProps) {
  
  const [filter, setFilter] = useState({ genero: ''})

  const changeFilter = (e: any) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  }
  return (
    <main className="px-6 py-12 flex items-center gap-40 bg-center bg-cover h-screen" style={{ backgroundImage: "url('/dashboard.jpg')" }}>
      <div className="justify-center">
        <NavBar active="dashboard" />
      </div>
      <div className="space-x-4 flex-col">
        <div className="items-center flex justify-center">
          <img src="/3.png" alt="logo" className="h-28 w-auto" />
        </div>

        <div className="mt-4 justify-center text-center">
          <h2 className="text-2xl font-light font-mono mb-2">Dashboard</h2>

          <section className="flex-col space-y-8 justify-between bg-purple-950 py-10 px-5 rounded-2xl">
            <div className="flex gap-5 items-center">
              <div>
               select
              </div>
              <div className="px-72 py-16 bg-slate-950 rounded-2xl">
                musicas
              </div>
              <div>logo</div>
            </div>
            <div className="flex gap-5 items-center">
              <div>Select</div>
              <div className="px-72 py-16 bg-slate-950 rounded-2xl">musicas</div>
              <div>logo</div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
