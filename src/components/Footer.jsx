import Link from "next/link"

export default function Footer() {
  return (
    <footer className="text-center bg-[#192613] text-white p-4">
<div className="max-w-3xl lg:max-w-7xl mx-auto px-8 pt-16 pb-10 sm:pb-20 grid gap-5 grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-6">
    <div>
      <p className="mb-3 text-white text-lg font-semibold">Explorer</p>
      <ul className="space-y-1">
        <li className="text-zinc-300">Domaine d&apos;activités</li>
        <li className="text-zinc-300">Accueil</li>
      </ul>
    </div>

    <div>
      <p className="mb-3 text-white text-lg font-semibold">Blog</p>
      <ul className="space-y-1">
        <li className="text-zinc-300">Confrères</li>
        <li className="text-zinc-300">Domaines de compétences</li>
      </ul>
    </div>
    <div>
      <p className="mb-3 text-white text-lg font-semibold">Consultation</p>
      <ul className="space-y-1">
        <li className="text-zinc-300">Consultation en ligne</li>
      </ul>
    </div>
    <div>
      <p className="mb-3 text-white text-lg font-semibold">Historique</p>
      <ul className="space-y-1">
        <li className="text-zinc-300">Plaidoiries</li>
        <li className="text-zinc-300">Spécialitées</li>
        <li className="text-zinc-300">l'Ordre des avocats</li>
      </ul>
    </div>
    <div>
      <p className="mb-3 text-white text-lg font-semibold">Réseaux sociaux</p>
      <ul className="space-y-1">
        <li className="text-zinc-300">Facebook</li>
        <li className="text-zinc-300">Instagram</li>
      </ul>
    </div>
    <div>
      <p className="mb-3 text-yellow-500 text-lg font-semibold">Contact</p>
      <ul className="space-y-1">
        <li className="text-zinc-300">2 Allée d&apos;Orléans</li>
        <li className="text-zinc-300">33000 BORDEAUX</li>
        <li className="text-zinc-300">ugo.ayivi@hedac.fr</li>
        <li className="text-zinc-300">+335 56 23 87 20</li>
      </ul>
    </div>
</div>
        <Link href="#">Ugo AYIVI - © 2025 - Tous droits réservés. </Link>
    </footer>
  )
}