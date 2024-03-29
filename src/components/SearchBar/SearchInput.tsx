import React from "react"
import { ISearchbar } from "../../interfaces/interfaces"


const SearchInput = ({ engine }: ISearchbar) => {
    const submitFn = (e: React.KeyboardEvent): void => {
        if (e.key !== 'Enter')
            return

            
        const input: HTMLInputElement = e.currentTarget! as HTMLInputElement,
              value: string = input.value


        const url: string = {
            brave: `https://search.brave.com/search?q=${value}`,
            google: `https://www.google.com/search?q=${value}`,
            ddg: `https://duckduckgo.com/?q=${value}`,
            startpage: `https://www.startpage.com/sp/search?query=${value}`,
            searx: `https://searx.thegpm.org/?q=${value}`
        }[engine]

        input.value = ''
        window.open(url)
    }


    return (

        <input
            onKeyDown={submitFn}
            type='text'
            spellCheck='false'
            placeholder="Make your query..."
        />
        
    )
}


export default SearchInput