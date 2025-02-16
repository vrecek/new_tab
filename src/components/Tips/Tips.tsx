import GetTips from "@/utils/GetTips"
import Tip from "./Tip"
import TipsHeader from "./TipsHeader"


const Tips = () => {
    return (
        <section className="tips">

            <TipsHeader />

            <ul>
                { GetTips().map((x, i) => <Tip key={i} msg={x.msg} />) } 
            </ul>

        </section>
    )
}


export default Tips