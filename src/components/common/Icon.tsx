import { IIcon } from "../../interfaces/interfaces"


const Icon = ({ icon, cname }: IIcon) => {
    return (

        <span className={ cname }>

            {icon}

        </span>

    )
}


export default Icon