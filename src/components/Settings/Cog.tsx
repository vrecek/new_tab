import { update_images } from '@/utils/SliderUtils'
import Icon from '../common/Icon'
import { FaCog } from 'react-icons/fa'
import { ICog } from '@/interfaces/interfaces'
import React from 'react'


const Cog = ({ bgs }: ICog) => {
    const [was_opened, setOpen] = React.useState<boolean>(false)


    const toggle_settings = () => {
        const aside: HTMLElement = document.querySelector('aside.settings')!
        
        if (!was_opened)
        {
            const box: Element = document.querySelector('section.slider-main-container div.slider-moving')!

            update_images(0, box.children[0], bgs)
            setOpen(true)
        }

        aside.classList.toggle('active')

        if (aside.classList.contains('active'))
        {
            aside.style.display = 'block'
            setTimeout(() => aside.style.translate = '0 0', 1)
        }
        else
        {
            aside.style.translate = '100% 0'
            setTimeout(() => aside.style.display = 'none', 250)
        }
    }   


    return (
        <Icon 
            clickfn={toggle_settings}
            cname='cog-icon' 
            icon={<FaCog />} 
        />
    )
}


export default Cog