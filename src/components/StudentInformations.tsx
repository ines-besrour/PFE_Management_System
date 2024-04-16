import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export const StudentInformations = () => {
    return (
        <div>
            <p className="text-left block text-xl font-medium leading-6 text-gray-900">Informations de l'étudiant</p>

            <form >
                <div className="flex gap-y-8 sm:grid-cols-2">

                    <div className="text-left w-2/3 mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-2">

                        <div className="sm:col-span-full">
                            <label htmlFor="Name" className="block text-sm font-medium leading-6 text-gray-900">Nom</label>
                            <div className="mt-2">
                                <input type="text" name="Name" id="Name" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B22F33] focus:outline-none sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">Prénom</label>
                            <div className="mt-2">
                                <input type="text" name="firstName" id="firstName" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B22F33] focus:outline-none sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Adresse e-mail</label>
                            <div className="mt-2">
                                <input type="email" name="email" id="email" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B22F33] focus:outline-none sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="cin" className="block text-sm font-medium leading-6 text-gray-900">CIN</label>
                            <div className="mt-2">
                                <input type="text" name="cin" id="cin" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B22F33] focus:outline-none sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Téléphone</label>
                            <div className="mt-2">
                                <input type="text" name="phone" id="phone" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B22F33] focus:outline-none sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="linkedin" className="block text-sm font-medium leading-6 text-gray-900">Profil LinkedIn</label>
                            <div className="mt-2">
                                <input type="text" name="linkedin" id="linkedin" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B22F33] focus:outline-none sm:text-sm sm:leading-6" />
                            </div>
                        </div>





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

                <div className="col-span-full mt-20 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-[#B22F33] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#B22F33] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B22F33]"
                    >
                        Save
                    </button>
                </div>
            </form >





        </div >
    )
}
