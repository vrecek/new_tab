import { IBackground } from "@/interfaces/interfaces"
import React from "react"


const Background = ({ bg, opacity }: IBackground) => {
    const [img, setImg] = React.useState<HTMLElement | null>(null)

    React.useEffect(() => {
        const ele: HTMLElement = document.querySelector('figure.background-image') as HTMLElement 

        ele.style.opacity = `${opacity}`
        setImg(ele)

    }, [])

    React.useEffect(() => {
        if (img)
            img.style.opacity = `${opacity}`

    }, [opacity])


    return (
        <figure className="background-image">

            <img 
                src={bg}
                alt='background' 
            />

        </figure>
    )
}


export default Background