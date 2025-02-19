import { ISettings_BG, SliderDirections } from "@/interfaces/interfaces"
import Setting_Section from "./Setting_Section"
import React from "react"
import SliderArrow from "./SliderArrow" 
import { change_slide, slider_init } from "@/utils/SliderUtils"


const Settings_Background = ({ setSettings, bg, bgs }: ISettings_BG) => {
    const [slide_nr, setSlide_nr] = React.useState<number>(~~(bgs.indexOf(bg) / 6))


    React.useEffect(() => slider_init(bgs, bg, setSettings), [])

    const slider_handler = (e: React.MouseEvent, dir: SliderDirections): void => {
        change_slide(e, dir, slide_nr, bgs, setSlide_nr)
    }


    return (
        <Setting_Section cname="settings-background" header="Background">

            <section className="slider-main-container">

                <SliderArrow direction="left" fn={slider_handler} />

                <div className="moving-wrapper">
                    <div className="slider-moving"></div>
                </div>

                <SliderArrow direction="right" fn={slider_handler} />

            </section>

        </Setting_Section>
    )
}


export default Settings_Background