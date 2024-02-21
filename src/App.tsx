import React from 'react'
import Logo from './components/Logo'
import Searchbar from './components/SearchBar/Searchbar'
import SearchEngines from './components/SearchEngines/SearchEngines'
import './css/index.css'
import { Engines } from './interfaces/interfaces'
import Background from './components/Background'
import Tips from './components/Tips/Tips'


function App() {
    const [engine, setEngine] = React.useState<Engines>('brave')


    return (
        <main>

            <Background />
            <Tips />

            <Logo />            
            <Searchbar engine={engine} />
            <SearchEngines setEngine={setEngine} />

        </main> 
    )
}


export default App
