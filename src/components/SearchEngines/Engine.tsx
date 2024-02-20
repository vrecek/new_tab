import React from "react"
import { IEngine } from "../../interfaces/interfaces"


const Engine = ({ img, txt, isActive, setEngine }: IEngine) => {
    const changeEngine = (e: React.MouseEvent): void => {
        const clicked: Element   = e.currentTarget!,
              rest:    Element[] = [...clicked.parentElement!.children]


        for (const x of rest) 
            x.classList.remove('active')

        clicked.classList.add('active')
        setEngine(txt)
    }   


    return (
        <section onClick={changeEngine} className={`engine ${isActive && 'active'}`}>

            <img src={img} alt={txt} />

        </section>
    )   
}


export default Engine