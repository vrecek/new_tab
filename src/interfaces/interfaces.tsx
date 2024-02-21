export type IIcon = {
    icon: JSX.Element
    cname: string
}


export type ISearchbar = {
    engine: Engines
}

export type EngineSetState = {
    setEngine: React.Dispatch<React.SetStateAction<Engines>>
}

export type Engines = 'brave' | 'google' | 'ddg' | 'startpage' | 'searx'


export type ISearchEngine = EngineSetState


export type EngineObject = {
    txt: Engines
    img: string
}

export type IEngine = EngineObject & EngineSetState & {
    isActive: boolean
}


export type ITip = {
    msg: string
}