import React from 'react'
import Logo from './components/Logo'
import Searchbar from './components/SearchBar/Searchbar'
import SearchEngines from './components/SearchEngines/SearchEngines'
import './css/index.css'
import { Engines } from './interfaces/interfaces'


function App() {
    const [engine, setEngine] = React.useState<Engines>('brave')


    return (
        <main>

            <Logo />            
            <Searchbar engine={engine} />
            <SearchEngines setEngine={setEngine} />

        </main> 
    )
}


export default App
