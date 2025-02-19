import { determine_arrows, update_images } from '@/utils/SliderUtils'
import Icon from '../common/Icon'
import { FaCog } from 'react-icons/fa'
import { ICog } from '@/interfaces/interfaces'
import React from 'react'


const Cog = ({ bgs, bg }: ICog) => {
    const [was_opened, setOpen] = React.useState<boolean>(false)


    const toggle_settings = () => {
        const aside: HTMLElement = document.querySelector('aside.settings')!
        
        if (!was_opened)
        {
            const slide_nr: number = ~~(bgs.indexOf(bg) / 6) 

            determine_arrows(slide_nr, bgs)
            update_images(slide_nr, bgs)
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