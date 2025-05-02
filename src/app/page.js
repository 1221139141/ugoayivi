import Link from "next/link";
import Image from "next/image";
import miroir from "../../public/images/miroir-eau.jpg"
import maitre from "../../public/images/maitre-ayivi.jpg"
export default function Accueil() {
  return (
    <main className="mt-20 text-center">
      {/* <div className="relative border-5 border-blue-500">
            <Image
              src={miroir}
              alt="le miroir d'eau de Bordeaux"
              className="border-4 border-pink-600 mask-b-from-20% mask-b-to-80% saturate-200 w-full text-3xl"
              />

      </div> */}
      <div>
        <section className="relative border-2 border-transparent bg-[url('../../public/images/miroir-eau.jpg')] bg-cover bg-center h-200 saturate-200">
          <h2 className="bg-gray-50/50 py-2 w-1/2 text-3xl sm:text-4xl xl:text-5xl mt-110  text-gray-900 text-left font-bold md:w-1/2">Votre partenaire légal pour chaque étape de votre carrière.</h2>
          <h3 className="mt-10 text-2xl sm:text-3xl xl:text-4xl text-left text-gray-900 text-semibold">Offrez vous une vie plus juste avec un avocat qui met en avant l'humain.
          </h3>
          <div className="relative grid h-150 grid-cols-2 content-end gap-4 mb-10">
          </div>
        </section>
      </div>

      <div className="h-full flex justify-center bg-[#fefce8] border-3">
        <div className="w-2/3 p-20 text-justify">
          <div className="text-2xl mb-5">
            <h3 className="text-3xl font-[Geist] font-semibold mb-6 ">Pour vous représenter</h3>
            <p className="font-[Geist]"> d’un xxx et xx obtenu à l’Université xx, Maître Ugo AYIVI est inscrit au Barreau de xx.</p>
          </div>
          <div className="text-2xl mb-4 font-[Geist]">
            Après une première expérience en juridiction au Tribunal judiciaire de xx, il a débuté son activité professionnelle au sein d'un cabinet pénaliste xx de renom, dont ceux de xx. Ces premières expériences lui ont permis d’acquérir de solides compétences dans la gestion de problématiques juridiques complexes.
          </div>
          {/* <div className="text-2xl mb-4">
            Maître Ugo AYIVI intervient principalement en droit social, tant pour défendre les mis en cause à tous les stades de la procédure que pour assister les victimes en entreprises.
          </div>
          <div className="text-2xl mb-4">
          Passionné par la défense pénale et l’art oratoire, il a été élu Premier Secrétaire de la Conférence du stage du barreau de Versailles pour l’année 2023.
          Rompu à l’exercice de la plaidoirie et fort de son expérience, il saura vous accompagner avec pugnacité, efficacité, professionnalisme et humanité devant toutes les juridictions françaises.
        </div> */}
        </div>
        <div className="">
          <Image
            src={maitre}
            alt="Maitre AYIVI Ugo"
            className="my-10 w-90 rounded-lg"
          />
        </div>
      </div>


    </main >
  );
}
