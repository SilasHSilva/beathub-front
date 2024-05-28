import Link from "next/link";

interface NavBarProps {
  active: "dashboard" | "musica" | "generos"
}

export default function NavBar({active}: NavBarProps) {
  const classActive = "border-s-medium border-purple-600 rounded-full"

  return (
    <nav className="flex-col bg-purple-950 gap-9 w-64 px-6 py-4 rounded-2xl min-h-[600px]">
      <div className="flex items-center justify-center">
        <img src="/2.png" alt="logo" className="h-24 w-24" />
      </div>
      <ul className="flex-col text-center mt-32 space-y-2 mx-7 font-mono text-xl">
        <li className={active == "dashboard"? classActive:"hover:bg-purple-600 rounded-2xl"}>
          <Link href="/">Dashboard</Link>
        </li>
        <li className={active == "musica"? classActive : "hover:bg-purple-600 rounded-2xl"}>
          <Link href="/musicas">Músicas</Link>
        </li>
        <li className={active == "generos"? classActive : "hover:bg-purple-600 rounded-2xl"}>
          <Link href="/generos">Gêneros</Link>
        </li>
      </ul>
    </nav>
  )
}