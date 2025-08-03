import Image from "next/image";
import maitre from "../../public/images/maitre-ayivi.jpg"

export default function Accueil({ monTitre }) {
  return (
    <main className="mt-20 text-center">
      <div>
        <section className="relative border-2 border-transparent bg-[url('../../public/images/miroir-eau.jpg')] bg-cover bg-center h-200 saturate-200">
          <h2 className="bg-gray-50/50 py-2 w-1/2 text-3xl sm:text-4xl xl:text-5xl mt-110  text-gray-900 text-left font-bold md:w-1/2">Votre partenaire légal pour chaque étape de votre carrière.</h2>
          <h3 className="mt-10 text-2xl sm:text-3xl xl:text-4xl text-left text-gray-900 text-semibold">Offrez vous une vie plus juste avec un avocat qui met en avant l&apos;humain.</h3>
          <div className="relative grid h-150 grid-cols-2 content-end gap-4 mb-10">
          </div>
        </section>
      </div>

      <div className="h-full flex justify-center bg-[#fefce8] border-3">
        <div className=" p-20 text-justify">
          <div className="text-2xl mb-5">

            <div className="flex justify-center">
          <Image
            src={maitre}
            alt="Maitre Ugo AYIVI"
            className="my-10 w-90 rounded-lg"
          />
        </div>

            <h3 className="text-3xl font-[Geist] font-semibold mb-6 ">Maître AYIVI est titulaire d&apos;un Master II droit des affaires de
              Aix-Marseille</h3>
            <p className="font-[Geist]">Installé depuis plusieurs années à Bordeaux, les juridictions bordelaises et
              girondines n&apos;ont plus aucun secret pour lui.</p>
          </div>
          <div className="text-2xl mb-4 font-[Geist]">Sa pratique, enrichie par ses différentes expériences professionnelles est
            aujourd&apos;hui axée vers le droit social, le droit pénal et le contentieux civil et
            commercial.</div>
          <div className="text-2xl mb-4">Grâce à sa double expérience en entreprise et en cabinet d’avocat,
            Maître AYVI est aujourd&apos;hui à même d&apos;anticiper et traiter aussi bien
            les problématiques opérationnelles que juridiques et vous conseiller
            au mieux dans vos démarches.</div>
          <div className="text-2xl mb-4">
            Maître AYIVI compte notamment parmi les quelques praticiens des
            modes amiables de règlements à l&apos;échelle locale ce qui rend
            particulièrement efficace dans la résolution négociée des différents.
          </div>
          <div className="text-2xl mb-4">
            Sa pratique est axée sur des valeurs des rigueurs, de réactivité et
            de résultats.
          </div>
          <div className="text-2xl mb-4">
            Que vous soyez salarié ou employeur, qu&apos;importe les enjeux, Maître
            AYIVI emploiera toutes ses compétences afin de vous
            accompagner tout le long de vos démarches juridiques.
          </div>
        </div>

      </div>


    </main >
  );
}
