import React from 'react'

export const metadata = {
  title: "contact - Ugo AYIVI",
  description: "Site officiel - en maintenance",
};

function page() {
  return (
   <main className="mt-60">
      <div className="h-full flex justify-center bg-[#fefce8] border-3">
        <div className="w-2/3 p-20 text-justify">
          <div className="text-2xl mb-5">
            <h3 className="text-3xl font-[Geist] font-semibold mb-6 ">
             Me contacter :
            </h3>
          </div>
          <div className="text-2xl mb-4">
            <h2 className="font-semibold">
              Numéro de téléphone : +335 56 23 87 20
            </h2>
            <h2 className="font-semibold">
              M'écrire à : ugo.ayivi@hedac.fr
            </h2>
            
          </div>
        </div>
      </div>

    </main>
  )
}

export default page