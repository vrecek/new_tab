import { EngineObject } from "../interfaces/interfaces"
import brave from '@/images/engines/brave.webp'
import google from '@/images/engines/google.webp'
import bing from '@/images/engines/bing.webp'
import ddg from '@/images/engines/ddg.webp'
import startpage from '@/images/engines/startpage.webp'
import yahoo from '@/images/engines/yahoo.webp'


const getEngines = (): EngineObject[] => {
    return [
        { img: brave,     engine: 'Brave',     visible: true },
        { img: ddg,       engine: 'DDG',       visible: true },
        { img: google,    engine: 'Google',    visible: true },
        { img: bing,      engine: 'Bing',      visible: true },
        { img: startpage, engine: 'Startpage', visible: true },
        { img: yahoo,     engine: 'Yahoo',     visible: true },
    ]
}


export default getEngines