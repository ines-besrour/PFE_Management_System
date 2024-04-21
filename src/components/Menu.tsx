import {DescriptionOutlined, FolderOpenOutlined, PermIdentityOutlined} from "@mui/icons-material";
export const Menu = () => {
    return (
        <div className="h-full ">
            <div  className="hs-overlay flex-col [--auto-close:lg] hs-overlay-open:translate-x-0 h-screen -translate-x-full transition-all duration-300 transform hidden  start-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto  [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
                <div className="px-6">
                    <a className="flex-none text-xl font-semibold" href="#" aria-label="Brand">Menu</a>
                </div>
                <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                    <ul className="space-y-1.5">
                        <li>
                            <a className="flex items-center gap-x-3.5 py-2 px-2.5 bg-[#830709] text-md text-white rounded-lg hover:bg-gray-100" href="#">
                               <FolderOpenOutlined/>
                                Dossier
                            </a>
                        </li>
                        <li className="hs-accordion" id="account-accordion">
                            <button type="button" className=" hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-[#830709] hover:text-white w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-md text-gray-700 rounded-lg hover:bg-[#830709]">
                                <DescriptionOutlined/>
                                Formulaire

                                <svg className="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>

                            </button>
                        </li>
                        <li className="hs-accordion" id="users-accordion">
                            <button type="button" className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-md text-gray-700 rounded-lg hover:bg-gray-100">
                                <PermIdentityOutlined/>
                                Profil

                                <svg className="hs-accordion-active:block ms-auto hidden size-4 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>

                            </button>

                        </li>


                    </ul>
                </nav>
                {/*<div className="flex w-full justify-end">*/}
                {/*    <div className="flex flex-col gap-2 w-full justify-end pr-10 items-center">*/}
                {/*        <button className="w-full h-10 py-2 border-[1px] border-[#B22F33] text-[#B22F33] hover:border-[#830709] hover:text-[#830709] rounded-md ">Cancel</button>*/}
                {/*        <button className="w-full py-2 h-10 bg-[#B22F33] hover:bg-[#830709] text-white rounded-md">Save</button>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>

        </div>

    );
}
