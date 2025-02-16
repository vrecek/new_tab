import { ITip } from "@/interfaces/interfaces"


const GetTips = (): ITip[] => {
    return [
        { msg: '[!aw <query>] to search on Arch Wiki (DDG, Brave)'},
        { msg: '[!w <query>] to search on Wikipedia (DDG, Brave)'},
        { msg: '[<query> site:<site>] to search from a specific site'},
        { msg: '[<query> filetype:<ext>] to search with a specific filetype'},
        { msg: '["<query>"] to search for exact phrase'},
    ]
}


export default GetTips