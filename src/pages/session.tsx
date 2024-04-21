export const Session = () => {
  return (
    <div className="flex flex-col gap-20 flex-grow pb-36">
    <div>
        <img src="https://insat.rnu.tn/assets/images/insat-header.jpg" alt="insat-view" className="w-full h-[450px]"/>
    </div>
    <div className="flex flex-row w-full flex-grow ">
        <div className="rounded-r-2xl bg-stone-300 opacity-75 p-5 text-neutral-700 text-center flex  justify-center items-center w-1/3 h-[250px]">
            <p className="text-lg">
            Bienvenue sur notre espace ! Nous sommes là pour aider les étudiants en fin de cursus à préparer leur dossier de projet de fin d'année face de soutenance.            </p>
        </div>
        <div className="flex-row flex justify-center items-center w-2/3 gap-8">
          <div>
            <button className="text-xl text-[#ffffff] bg-[#830709] rounded-xl pt-8 pb-8 pr-14 pl-14 ">Session de dépot</button>
            <p className="text-center text-[#7C8DB5] text-sm pt-8">Session debute de 01/02/03 jusqu’à 02/03/04</p>
          </div>
          <div>
            <button className="text-xl text-[#ffffff] bg-[#830709] rounded-xl p-8">Session de soutenance</button>
            <p className="text-center text-[#7C8DB5] text-sm pt-8">Session debute de 01/02/03 jusqu’à 02/03/04</p>
          </div>
            
        </div>
    </div>
</div>
  );
}