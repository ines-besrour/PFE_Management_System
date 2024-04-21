import { PhotoIcon } from '@heroicons/react/24/solid'

export const CompleteFolder = () => {
    return (
        <div className="text-left flex gap-y-8">
            <div>
                <div className=" block px-4 sm:px-0">
                    <h3 className="text-xl font-semibold leading-7 text-gray-900">Dossier complet</h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Informations personnelles et documents administratifs</p>
                </div>
                <div className="flex gap-y-8 grid:col-span-full sm:grid-cols-2">
                    <div className="gap-y-1 mt-6 border-t border-gray-100">
                        <dl className="divide-y divide-gray-100">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Nom</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Margot Foster</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Prénom</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Backend Developer</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Address e-mail</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">CIN</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">12345678
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Téléphone</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">12 345 678</dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Sujet du stage</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                                    qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                                    pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Date de début de stage</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">01/02/2022</dd>
                            </div><div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Date de fin de stage</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">01/02/2022</dd>
                            </div><div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Entreprise</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Wecraft
                                    Tunisie</dd>
                            </div><div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Pays de stage</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Tunisie</dd>
                            </div><div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Contact de l'entreprise</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">12 345 678</dd>
                            </div><div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Adresse e-mail de l'encadrant de l'entreprise</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">francois.dubois@wecraft.tn
                                </dd>
                            </div><div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Encadrant de l'INSAT</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Riadh Robbena
                                </dd>
                            </div><div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">Adresse e-mail de l'encadrant de l'INSAT</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Riadh.Robbena@insat.ucar.tn
                                </dd>
                            </div>


                        </dl>

                    </div>


                    <div className="w-1/3 h-52 flex justify-end sm:w-full">
                        <div className="mt-2 flex justify-end rounded-lg border border-dashed border-gray-900/25 px-6 py-10">

                            <div className="text-center">
                                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                    Votre photo
                                </label>
                                <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                    <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-[#B22F33] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#B22F33] focus-within:ring-offset-2 hover:text-[#B22F33]"
                                    >
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="flex col-span-full mt-20  place-items-center justify-center gap-x-6">
                    <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-base font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        <svg className="h-6 w-6 text-gray-600 " width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M5 12l5 5l10 -10" /></svg>
                        <span className="ml-2">Convention</span>

                    </span>
                    <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-base font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        <svg className="h-6 w-6 text-gray-600" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M5 12l5 5l10 -10" /></svg>
                        <span className="ml-2">Lettre d'affection</span>
                    </span>
                    <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-base font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                        <svg className="h-6 w-6 text-gray-600" width="24" height="24"  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M5 12l5 5l10 -10" /></svg>
                        <span className="ml-2">Fiche de proposition</span>

                    </span>

                </div>


            </div>
        </div>
    )
}