import { Options } from "@/interfaces/interfaces"
import getEngines from "./GetEngines"



const getStorage = (): Options | null => JSON.parse( window.localStorage.getItem("settings")! )

const setStorage = (obj: Options): void => window.localStorage.setItem("settings", JSON.stringify(obj))

const clearStorage = (): void => {
    window.localStorage.clear()
    window.location.reload()
}

const initial_settings = async (): Promise<Options> => {
    const settings: Options | null = getStorage() 

    if (!settings)
    {
        const bgs:   string[] = []
        let   count: number   = 0

        while (1)
        {
            try
            {
                const img: any = await import(`@/images/backgrounds/background${++count}.webp`)
                bgs.push(img.default)
            }
            catch (err) { break }
        }

        const default_settings: Options = {
            background:  bgs[0],
            backgrounds: bgs,
            opacity:     .2,
            show_sett:   false,
            show_tips:   true,
            engine:      'Brave',
            engines:     getEngines()
        }

        setStorage(default_settings)

        return default_settings
    }

    return settings
}


export {
    setStorage,
    getStorage,
    clearStorage,
    initial_settings
}