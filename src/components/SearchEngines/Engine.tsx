import { IEngine } from "../../interfaces/interfaces"
import changeEngine from "@/utils/ChangeEngine"


const Engine = ({ img, engine, isActive, set_engine_fn }: IEngine) => {
    return (
        <section 
        onClick={(e) => changeEngine(e, set_engine_fn)} 
        className={`engine ${isActive && 'active'}`}
        >
            <img src={img} alt={engine} />

        </section>
    )   
}


export default Engine