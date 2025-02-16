import { ISettings_Opacity } from "@/interfaces/interfaces"
import Setting_Section from "./Setting_Section"
import { set_opacity_fn } from "@/utils/SetFunctions"


const Settings_Opacity = ({ opacity, setSettings }: ISettings_Opacity) => {
    const setopacity = (e: React.ChangeEvent) => {
        const t:   HTMLInputElement = e.target as HTMLInputElement,
              img: HTMLElement      = document.querySelector('figure.background-image') as HTMLElement,
              txt: Element          = t.parentElement!.children[0]

        txt.textContent   = t.value
        img.style.opacity = t.value
    }

    const saveopacity = (e: React.MouseEvent) => {
        const t: HTMLInputElement = e.target as HTMLInputElement

        set_opacity_fn(setSettings, parseFloat(t.value))
    }
    

    return (
        <Setting_Section cname="settings-opacity" header="Background opacity">
            
            <div>
                <label>{opacity}</label>

                <input 
                    onChange={setopacity} 
                    onMouseUp={saveopacity}
                    type="range" 
                    min="0" 
                    max="1" 
                    step={.01}
                    defaultValue={opacity} 
                />
            </div>

        </Setting_Section>
    )
}


export default Settings_Opacity