import { ISettings_SE } from "@/interfaces/interfaces"
import Setting_Section from "./Setting_Section"
import { update_engines } from "@/utils/SetFunctions"


const Settings_SearchEngines = ({setSettings, engines, engine}: ISettings_SE) => {
    return (
        <Setting_Section cname="settings-search-engines" header="Search engines">
            <ul>
                {engines.map(x => (
                    <li className="checkbox-container" key={x.engine}>

                        <input 
                            id={x.engine} 
                            onChange={(e) => update_engines(e, setSettings, engines, engine, x.engine)} 
                            type="checkbox" 
                            defaultChecked={x.visible}
                        />

                        <label htmlFor={x.engine}>{x.engine}</label>

                    </li>
                ))}
            </ul>
        </Setting_Section>
    )
}


export default Settings_SearchEngines