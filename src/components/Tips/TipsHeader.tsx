import { MdKeyboardArrowDown } from "react-icons/md"
import Icon from "../common/Icon"
import React from "react"
import Client, { DD } from "../../utils/Client"


const TipsHeader = () => {
    const [dd] = React.useState<DD.DropDown>(new Client.DropDown(250))

    const toggleTips = (e: React.MouseEvent): void => {
        const t:     HTMLElement = e.currentTarget! as HTMLElement,
              list:  HTMLElement = t.parentElement!.children[1] as HTMLElement,
              arrow: HTMLElement = t.children[0] as HTMLElement

        dd.switchActive()
        dd.getActive() 
            ? dd.expandMenu(list)
            : dd.shrinkMenu()
        dd.rotateArrow(arrow)
    }


    return (
        <p onClick={toggleTips} className="tips-header">

            Tips
            <Icon cname="arrow-icon" icon={<MdKeyboardArrowDown />} />

        </p>
    )
}


export default TipsHeader