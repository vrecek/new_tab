import React from "react"


export type IIcon = {
    icon:     JSX.Element
    cname?:   string
    clickfn?: (e: React.MouseEvent) => void
}

export type IBackground = {
    bg:      string
    opacity: number
}

export type ISearchbar = {
    engine: Engines
}

export type SetEngineDispatch = Setter<Engines>
export type OptionsDispatch = Setter<Options | null>
export type OptionsSetter = Setter<Options>

export type OptionsSetState = {
    setSettings: OptionsSetter
}


export type Engines = 'Brave' | 'Google' | 'DDG' | 'Startpage' | 'Bing' | 'Yahoo'


export type ISearchEngine = OptionsSetState & {
    engines:     EngineObject[]
    engine:      Engines
}


export type EngineObject = {
    engine:  Engines
    img:     string
    visible: boolean
}

export type IEngine = EngineObject & {
    isActive:       boolean
    set_engine_fn:  () => void
}


export type ITip = {
    msg: string
}


export type SettingsState = {
    settings: boolean
    setter:   () => void
}

export type ISettings = OptionsSetState & {
    settings:    Options
}

export type ISettings_SE = OptionsSetState & {
    engines:   EngineObject[]
    engine:    Engines
}

export type Options = {
    background:  string
    backgrounds: string[]
    opacity:     number
    show_tips:   boolean
    engines:     EngineObject[]
    engine:      Engines
}

export type ISetting_Section = {
    children:  any
    header:    string
    cname?:    string
}

export type ISetting_Tips = OptionsSetState & {
    show: boolean
}

export type ISettings_BG = OptionsSetState & {
    bg:  string
    bgs: string[]
}

export type ISettings_Opacity = OptionsSetState & {
    opacity: number
}

export type SliderDirections = 'left' | 'right'

export type ISliderArrow = {
    cname?:    string
    direction: SliderDirections
    fn:        (e: React.MouseEvent, dir: SliderDirections) => void
}

export type Setter<T> = React.Dispatch<React.SetStateAction<T>>

export type ICog = {
    bgs: string[]
    bg:  string
}