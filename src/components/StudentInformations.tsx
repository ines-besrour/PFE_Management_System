export const StudentInformations = () => {
    return (
        <div className="absolute w-[1224px] h-[1228px] left-[179px] top-[92px] overflow-hidden">
            <p className="text-left block text-xl font-medium leading-6 text-gray-900">Informations de l'étudiant</p>
            <div className="mt-10 flex flex-row gap-6 " >
                {/* Form */}

                <div className="text-left mt-10 grid grid-cols-1 gap-6 gap-y-8 sm:grid-cols-2">
                    <form className="flex-grow w-[60vw]">
                        <div className="text-left grid grid-cols-1 gap-y-8 sm:grid-cols-3">
                            <div className="sm:col-span-2">
                                <label htmlFor="Name" className="block text-sm font-medium leading-6 text-gray-900">Nom</label>
                                <div className="mt-2">
                                    <input type="text" name="Name" id="Name" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B22F33] focus:outline-none sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">Prénom</label>
                                <div className="mt-2">
                                    <input type="text" name="firstName" id="firstName" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B22F33] focus:outline-none sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Adresse e-mail</label>
                                <div className="mt-2">
                                    <input type="email" name="email" id="email" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B22F33] focus:outline-none sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="cin" className="block text-sm font-medium leading-6 text-gray-900">CIN</label>
                                <div className="mt-2">
                                    <input type="text" name="cin" id="cin" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B22F33] focus:outline-none sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Téléphone</label>
                                <div className="mt-2">
                                    <input type="text" name="phone" id="phone" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B22F33] focus:outline-none sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="linkedin" className="block text-sm font-medium leading-6 text-gray-900">Profil LinkedIn</label>
                                <div className="mt-2">
                                    <input type="text" name="linkedin" id="linkedin" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B22F33] focus:outline-none sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                        </div>
                    </form>
                </div>

                <div className="grid grid-cols-1  gap-y-8 sm:grid-cols-3">
                    <div className="relative w-[184px] h-[208px] bg-white border border-gray-300 shadow-md rounded-lg">
                        {/* Profile Picture */}
                        <div className="absolute w-[184px] h-[168px] top-0 left-0 bg-gray-300 border border-gray-300 rounded-t-lg"></div>

                        {/* Add your photo (Button) */}
                        <button className="absolute w-[154px] h-[24px] left-[15px] bottom-[8px] text-gray-900 rounded hover:bg-gray-100 focus:outline-none" >
                            Ajouter votre photo
                        </button>
                    </div>
                </div>



            </div>
        </div>
    )
}
