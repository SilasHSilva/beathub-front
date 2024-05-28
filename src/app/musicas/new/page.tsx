import NavBar from "@/components/NavBar";
import { getGeneros } from "@/app/actions/generos/get";
import { Form } from "./Form";


export default async function CadastrarMusicas() {
    const generos = await getGeneros()

    return (
        <main className="px-6 py-12 flex items-center gap-80 bg-center bg-cover h-screen" style={{ backgroundImage: "url('/Musicas.jpg')" }}>
            <NavBar active="musica" />
            <div>
                <div className="items-center flex justify-center">
                    <img src="/3.png" alt="logo" className="h-28 w-auto" />
                </div>
                <Form generos={generos} />
            </div>
        </main>


    )
}