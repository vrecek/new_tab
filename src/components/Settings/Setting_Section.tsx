import { ISetting_Section } from "@/interfaces/interfaces"


const Setting_Section = ({ header, cname, children }: ISetting_Section) => {
    return (
        <section className={`setting-section ${cname}`}>

            <p className="header">{header}</p>

            {children}

        </section>
    )
}


export default Setting_Section