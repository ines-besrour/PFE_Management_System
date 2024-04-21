export const Home = () => {
    return (
        <div className="flex flex-col gap-20 flex-grow pb-36">
            <div>
                <img src="https://insat.rnu.tn/assets/images/insat-header.jpg" alt="insat-view" className="w-full h-[450px]"/>
            </div>
            <div className="flex flex-row w-full flex-grow ">
                <div className="rounded-r-2xl bg-[#830709] opacity-75 p-5 text-white text-center flex  justify-center items-center w-1/3 h-[250px]">
                    <p className="text-lg">
                        Bienvenue sur notre espace ! Nous sommes là pour aider les étudiants en fin de cursus à préparer leur dossier de projet de fin d'année facilement et à garantir une finalisation fluide de la procédure de soutenance.
                    </p>
                </div>
                <div className="flex-col flex justify-center items-center w-2/3 gap-8">
                    <p className="text-lg font-bold">
                        Veuillez entrer vos données
                    </p>
                    <div className="flex-col flex w-1/2">
                        <label className="block text-md font-medium w-1/2 leading-6 text-gray-900">Adresse e-mail :</label>
                        <div className="mt-2 w-full ">
                            <input type="email" name="Name" id="Name" className="p-3 h-12 block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B22F33] focus:outline-none sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col">
                        <label className="block text-md font-medium leading-6 text-gray-900">Mot de passe :</label>
                        <div className="mt-2">
                            <input type="password" name="firstName" id="firstName" className="p-3 h-12 block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#B22F33] focus:outline-none sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <p className="text-center text-[#7C8DB5] text-sm">mot de passe oublié ?</p>
                    <button className="text-lg text-[#830709] border-[#830709] rounded-lg pt-2 pb-2 pl-4 pr-4 border-2">connect</button>

                </div>
            </div>
        </div>
    );
};
