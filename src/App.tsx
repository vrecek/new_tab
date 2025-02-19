import React from 'react'
import Logo from './components/Logo'
import Searchbar from './components/SearchBar/Searchbar'
import SearchEngines from './components/SearchEngines/SearchEngines'
import { Options, OptionsSetter } from './interfaces/interfaces'
import Background from './components/Background'
import Tips from './components/Tips/Tips'
import './css/index.css'
import './css/Main.css'
import './css/Settings.css'
import Settings from './components/Settings/Settings'
import Cog from './components/Settings/Cog'
import { initial_settings } from './utils/StorageFunctions'


function App() {
    const [settings, setSettings] = React.useState<Options | null>(null)

    React.useEffect(() => {
        (async () => setSettings(await initial_settings()))()
    }, [])


    if (settings)
    return (
        <main>

            <Background opacity={settings.opacity} bg={settings.background} />

            { settings.show_tips && <Tips /> }

            <Logo />            
            <Searchbar engine={settings.engine} />
            <SearchEngines 
                setSettings={setSettings as OptionsSetter} 
                engines={settings.engines} 
                engine={settings.engine} 
            />

            <Settings 
                setSettings={setSettings as OptionsSetter}
                settings={settings}
            /> 

            <Cog bgs={settings.backgrounds} />

        </main> 
    )

    return <></>
}


export default App
