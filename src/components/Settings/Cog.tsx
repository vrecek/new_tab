import Icon from '../common/Icon'
import { FaCog } from 'react-icons/fa'
import { SettingsState } from '@/interfaces/interfaces';


const Cog = ({ setter, settings }: SettingsState) => {
    const toggle_settings = () => {
        let ms = 0

        if (settings)
        {
            const aside: HTMLElement = document.querySelector('aside.settings')!

            ms = 250
            aside.style.translate = '100% 0'
        }

        setTimeout(setter, ms)
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