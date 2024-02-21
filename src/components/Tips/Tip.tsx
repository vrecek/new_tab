import React from "react"
import { ITip } from "../../interfaces/interfaces"


const Tip = ({ msg }: ITip) => {
    const ref = React.useRef<HTMLLIElement>(null)

    React.useEffect(() => {
        const newMsg: string = msg.replaceAll('<', '&lt;')
                                  .replaceAll('>', '&gt;')
                                  .replace('[', '<span class="clr">')
                                  .replace(']', '</span>')

        ref.current!.innerHTML = newMsg
    }, [])


    return (
        <li ref={ref}></li>
    )
}


export default Tip