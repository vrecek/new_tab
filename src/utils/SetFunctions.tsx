import { EngineObject, Engines, OptionsSetter } from "@/interfaces/interfaces"
import { setStorage } from "./StorageFunctions"


const toggle_settings = (setter: OptionsSetter): void => {
    setter(curr => {
        curr.show_sett = !curr.show_sett

        return {...curr}
    })
}

const toggle_tips = (setter: OptionsSetter): void => {
    setter(curr => {
        curr.show_tips = !curr.show_tips
        setStorage({...curr, show_sett: false})
        
        return {...curr}
    })
}

const set_engine_fn = (setter: OptionsSetter, new_engine: Engines): void => {
    setter(curr => {
        curr.engine = new_engine
        setStorage({...curr, show_sett: false})

        return {...curr}
    })
}

const set_opacity_fn = (setter: OptionsSetter, new_opacity: number): void => {
    setter(curr => {
        curr.opacity = new_opacity
        setStorage({...curr, show_sett: false})

        return {...curr}
    })
}

const set_background_fn = (setter: OptionsSetter, new_bg: string): void => {
    setter(curr => {
        curr.background = new_bg
        setStorage({...curr, show_sett: false})
        
        return {...curr}
    })
}


const update_engines = (e: React.ChangeEvent, setter: OptionsSetter, engines: EngineObject[], engine:Engines, li_eng: Engines): void => {
    const eng_visible: EngineObject[] = engines.filter(x => x.visible),
          index:       number         = engines.findIndex(x => x.engine === li_eng)

    let update_eng: boolean = false


    if (engines[index].visible && eng_visible.length <= 1)
    {
        (e.currentTarget as HTMLInputElement).checked = true
        return
    }

    if (engines[index].engine === engine)
        update_eng = true


    setter(curr => {
        if (update_eng)
            curr.engine = eng_visible.filter(x => x.engine !== engine)[0].engine

        curr.engines[index].visible = !curr.engines[index].visible 
        setStorage({...curr, show_sett: false})

        return {...curr}
    })
}


export {
    toggle_settings,
    toggle_tips,
    set_engine_fn,
    set_opacity_fn,
    set_background_fn,
    update_engines
}