
import { getById } from "@/app/actions/generos/get-by-id";
import NavBar from "@/components/NavBar";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { EditForm } from "./EditForm";


export default async function EditGeneros({ params }: Params) {
  const { id } = params
  const genero = await getById(id)
 
  return (
    <main className="px-6 py-12 flex items-center gap-72 bg-center bg-cover h-screen" style={{ backgroundImage: "url('/Genero.jpg')" }}>
      <NavBar active="generos" />
      <EditForm genero={genero} />
    </main>
  );
}
