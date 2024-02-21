import { EngineObject, ISearchEngine } from "../../interfaces/interfaces"
import brave from '../../images/brave.png'
import google from '../../images/google.png'
import ddg from '../../images/ddg.png'
import startpage from '../../images/startpage.png'
import searx from '../../images/searx.png'
import Engine from "./Engine"


const SearchEngines = ({ setEngine }: ISearchEngine) => {
    const engines: EngineObject[] = [
        { img: brave, txt: 'brave' },
        { img: ddg, txt: 'ddg' },
        { img: google, txt: 'google' },
        { img: startpage, txt: 'startpage' },
        { img: searx, txt: 'searx' },
    ]


    return (
        <section className="search-engines">

            {
                engines.map((x, i) => (
                    <Engine 
                        isActive={!i}
                        key={i}
                        img={x.img}
                        txt={x.txt}
                        setEngine={setEngine}
                    />
                ))
            }

        </section>
    )
}


export default SearchEngines