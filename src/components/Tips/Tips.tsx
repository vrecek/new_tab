import { ITip } from "../../interfaces/interfaces"
import Tip from "./Tip"
import TipsHeader from "./TipsHeader"


const Tips = () => {
    const tips: ITip[] = [
        { msg: '[!aw <query>] to search on Arch Wiki (DDG, Brave)'},
        { msg: '[<query> site:<site>] to search from a specific site'},
    ]

    
    return (
        <section className="tips">

            <TipsHeader />

            <ul> { tips.map((x, i) => <Tip key={i} msg={x.msg} />) } </ul>

        </section>
    )
}


export default Tips