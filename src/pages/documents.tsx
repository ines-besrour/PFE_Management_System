import {SaveAltOutlined, AddPhotoAlternateOutlined} from "@mui/icons-material";

export const Documents = () => {
    return (
        <div className="flex flex-col gap-2 p-4  flex-grow">
            <p className="text-left block text-xl font-medium text-gray-900">Dossier du stage</p>
            <p className="text-left block text-md font-small text-gray-500">Convention de stage / lettre d’affectation / Lettre de liaison</p>
            <form className="flex flex-col flex-grow">
                <div className="mt-7 h-[350px] flex flex-col justify-center items-center justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 hover:bg-[#E9EFFF]">
                    <AddPhotoAlternateOutlined
                        fontSize={'large'}
                        htmlColor="#7C8DB5"
                    />
                    <div className="text-center">
                        <p  className="block text-md p-5 font-medium leading-6 text-gray-500">
                            Upload a file
                        </p>
                        <p className="block text-sm font-sm p-5text-gray-500">Jpg | Png | Pdf | Svg</p>
                        <div className=" flex justify-center p-5 text-sm items-center">
                            <label
                                htmlFor="file-upload"
                                className="text-center p-3 relative cursor-pointer rounded-md bg-[#B22F33] text-white hover:bg-[#830709] "
                            >
                                <SaveAltOutlined
                                    fontSize={'small'}
                                />
                                <span className="px-1 text-center">Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="flex flex-grow w-full">
                    <div className="flex flex-row gap-2 w-full justify-end pr-10 items-center">
                        <button className="w-1/12 h-10 py-2 border-[1px] border-[#B22F33] text-[#B22F33] hover:border-[#830709] hover:text-[#830709] rounded-md ">Cancel</button>
                        <button className="w-1/12 py-2 h-10 bg-[#B22F33] hover:bg-[#830709] text-white rounded-md">Save</button>
                    </div>

                </div>
            </form>
        </div>

    )

}

