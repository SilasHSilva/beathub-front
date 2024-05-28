import { getGeneros } from "../actions/generos/get";
import NavBar from "@/components/NavBar";
import { get } from "../actions/musicas/get";
import { MusicaData } from "./MusicaData";

export default async function Musica() {
  const musicas = await get()
  const generos: Array<Genero> = await getGeneros()

  return (
    <main className="px-6 py-12 flex items-center gap-12 bg-center bg-cover h-screen" style={{ backgroundImage: "url('/Musicas.jpg')" }}>
      <NavBar active="musica" />
      <div>
      <div className="items-center flex justify-center">
        <img src="/3.png" alt="logo" className="h-28 w-auto" />
      </div>
      <MusicaData
        musicas={musicas}
        generos={generos}
      />
      </div>
    </main>

  );
}
