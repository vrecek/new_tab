import { Engines } from "../interfaces/interfaces"


const getUrl = (query: string, engine: Engines) => {
    return {
        Brave: `https://search.brave.com/search?q=${query}`,
        Google: `https://www.google.com/search?q=${query}`,
        DDG: `https://duckduckgo.com/?q=${query}`,
        Startpage: `https://www.startpage.com/sp/search?query=${query}`,
        Bing: `https://www.bing.com/search?q=${query}`,
        Yahoo: `https://search.yahoo.com/search?p=${query}`
    }[engine]
}


export default getUrl