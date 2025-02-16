import { ISettings } from "@/interfaces/interfaces"
import Settings_SearchEngines from "./Settings_SearchEngines"
import Settings_Tips from "./Settings_Tips"
import Settings_Background from "./Settings_Background"
import { clearStorage } from "@/utils/StorageFunctions"
import Settings_Opacity from "./Settings_Opacity"


const Settings = ({ setSettings, settings }: ISettings) => {
    return (
        <aside className="settings">

            <Settings_SearchEngines 
                setSettings={setSettings}
                engine={settings.engine} 
                engines={settings.engines} 
            />

            <Settings_Tips setSettings={setSettings} show={settings.show_tips} />

            <Settings_Background 
                setSettings={setSettings} 
                bgs={settings.backgrounds} 
                bg={settings.background} 
            />

            <Settings_Opacity 
                setSettings={setSettings} 
                opacity={settings.opacity}
            />

            <button className="reset-btn" onClick={clearStorage}>
                Reset
            </button>

        </aside>
    )
}


export default Settings