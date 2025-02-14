import { toggle_tips } from "@/utils/SetFunctions"
import Setting_Section from "./Setting_Section"
import { ISetting_Tips } from "@/interfaces/interfaces"


const Settings_Tips = ({ setSettings, show }: ISetting_Tips) => {
    return (
        <Setting_Section header="Tips">

            <div className="checkbox-container">

                <input defaultChecked={show} onChange={() => toggle_tips(setSettings)} type="checkbox" id="tips-checkbox" />
                <label htmlFor="tips-checkbox">Show tips</label>

            </div>

        </Setting_Section>
    )
}


export default Settings_Tips