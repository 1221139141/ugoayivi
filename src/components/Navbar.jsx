import Link from "next/link"
import Click from "../components/Click"

function Navbar({monTitre}) {
  return (
    <div className="fixed z-20 top-0 laptop-nav:top-3 left-0 w-full flex justify-center laptop-nav:items-center">
      <nav className="bg-[#fefce8] px-4 py-8 rounded shadow-xl w-full flex flex-col laptop-nav:flex-row laptop-nav:justify-center-safe laptop-nav:max-w-7xl">
        <ul className="flex justify-center laptop-nav:flex items-center gap-4 pt-2 laptop-nav:pt-0 mb-6 laptop-nav:mb-0 laptop-nav:bg-transparent flex-col laptop-nav:flex-row laptop-nav:justify-center">
          <li className="my-2">
            <Link href="/" className="font-bold text-gray-900 mr-auto">Ugo AYIVI</Link>
          </li>
          <li>
            <Link href="/" className="mx-2 text-gray-900 hover:text-yellow-600">Accueil</Link>
          </li>
          <li>
            <Link href="/activities" className="mx-2 text-gray-900 hover:text-yellow-600">Domaine d&apos;activité</Link>
          </li>
          <li>
            <Link href="/plaidoiries" className="mx-2 text-gray-900 hover:text-yellow-600">Mes plaidoiries</Link>
          </li>
        </ul>
      </nav>
    </div>

  )
}

export default Navbar