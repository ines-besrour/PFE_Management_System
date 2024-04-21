import { countries, TCountries } from "countries-list";

const CountryDropdown = () => {
  return (
      <select className=" p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B22F33] focus:outline-none sm:text-sm sm:leading-6">
          {Object.keys(countries).map((code) => (
              <option key={code} value={code}>
                  {(countries as TCountries)[code as keyof TCountries].name}
              </option>
          ))}
      </select>
  );
};

export const InternshipDetails = () => {
    return (
      <div className="p-10 flex-grow">
        <p className="text-left block text-xl font-medium leading-6 text-gray-900">Details du stage</p>
        <form >
          <div className="text-left	mt-10 grid grid-cols-1 w-11/12 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="Entreprise" className="block text-sm font-medium leading-6 text-gray-900">Entreprise</label>
              <div className="mt-2">
                <input type="text" name="Entreprise" id="Entreprise"  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B22F33] focus:outline-none sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div className="sm:col-span-3 flex flex-col">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
              <div className="mt-2 ">
                <CountryDropdown />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">Contact Entreprise</label>
              <div className="mt-2">
              <input id="contact" name="contact" autoComplete="contact" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B22F33] focus:outline-none sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Session de soutenance</label>
              <div className="mt-2">
                <select id="country" name="country" autoComplete="country-name" className="p-3 block w-full rounded-md border-0 py-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B22F33] focus:outline-none sm:text-sm sm:leading-6">
                  <option>Session Juin</option>
                  <option>Session Septembre</option>
                  <option>Session Octobre</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">Encadrant Entreprise</label>
              <div className="mt-2">
              <input id="contact" name="contact" autoComplete="contact" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B22F33] focus:outline-none sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">Adresse e-mail Encadrant Entreprise</label>
              <div className="mt-2">
              <input id="contact" name="contact" autoComplete="email" type='email' className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B22F33] focus:outline-none sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div className="sm:col-span-3">
            <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">Date début de stage</label>
              <div className="mt-2">
              <input  datepicker-autohide type="date" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B22F33] focus:outline-none sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div className="sm:col-span-3">
            <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">Date fin de stage</label>
              <div className="mt-2">
              <input  datepicker-autohide type="date" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B22F33] focus:outline-none sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">Encadrant INSAT</label>
              <div className="mt-2">
              <input id="contact" name="contact" autoComplete="contact" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B22F33] focus:outline-none sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">Adresse e-mail Encadrant INSAT</label>
              <div className="mt-2">
              <input id="contact" name="contact" autoComplete="contact" type="email" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B22F33] focus:outline-none sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">Sujet</label>
              <div className="mt-2">
                <textarea id="about" name="about" rows={3} className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B22F33] focus:outline-none sm:text-sm sm:leading-6"></textarea>
              </div>
            </div>

          </div>
        </form>
      </div>

    )

}

