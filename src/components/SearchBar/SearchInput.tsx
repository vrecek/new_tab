import React from "react"
import { ISearchbar } from "../../interfaces/interfaces"
import getUrl from "../../utils/GetUrl"


const SearchInput = ({ engine }: ISearchbar) => {
    const submitFn = (e: React.KeyboardEvent): void => {
        if (e.key !== 'Enter')
            return
            
        const input: HTMLInputElement = e.currentTarget! as HTMLInputElement
        
        window.open( getUrl(input.value, engine), "_blank" )
        input.value = ''
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