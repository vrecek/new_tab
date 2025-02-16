import { EngineObject } from "../interfaces/interfaces"
import brave from '@/images/engines/brave.png'
import google from '@/images/engines/google.png'
import bing from '@/images/engines/bing.png'
import ddg from '@/images/engines/ddg.png'
import startpage from '@/images/engines/startpage.png'
import yahoo from '@/images/engines/yahoo.png'


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