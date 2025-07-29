import Link from "next/link"

export default function Click({monTitre}) {
  return (
    // <Link href="/mon-cursus" className="m-4 p-8 hover:bg-[#192613] hover:text-zinc-300 bg-yellow-500 text-gray-900 text-5xl font-bold rounded">{monTitre}</Link>
    <Link href="/mon-cursus" className="m-4 p-8 hover:bg-yellow-300 bg-red-500 text-gray-900 text-5xl font-bold rounded">{monTitre}</Link>
  )
}
