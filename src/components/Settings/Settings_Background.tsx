import { ISettings_BG } from "@/interfaces/interfaces"
import Setting_Section from "./Setting_Section"
import { set_background_fn } from "@/utils/SetFunctions"


const Settings_Background = ({ setSettings, bg, bgs }: ISettings_BG) => {
    return (
        <Setting_Section cname="settings-background" header="Background">

            <ul>
                {bgs.map(x => (
                    <li onClick={() => set_background_fn(setSettings, x)} className={x === bg ? 'border' : ''} key={x}>

                        <img src={x} alt="Background" />

                    </li>
                ))}
            </ul>            

        </Setting_Section>
    )
}


export default Settings_Background