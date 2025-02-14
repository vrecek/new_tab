import { set_engine_fn } from "@/utils/SetFunctions"
import { ISearchEngine } from "../../interfaces/interfaces"
import Engine from "./Engine"


const SearchEngines = ({ setSettings, engines, engine }: ISearchEngine) => {
    return (
        <section className="search-engines">
            {
                engines.map((x, i) => (
                    x.visible &&
                    <Engine 
                        visible={true}
                        isActive={engine === x.engine}
                        key={i}
                        img={x.img}
                        engine={x.engine}
                        set_engine_fn={() => set_engine_fn(setSettings, x.engine)}
                    />
                ))
            }
        </section>
    )
}


export default SearchEngines