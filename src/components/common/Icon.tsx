import { IIcon } from "../../interfaces/interfaces"


const Icon = ({ icon, cname, clickfn }: IIcon) => {
    return (
        <span onClick={clickfn} className={cname}>
            {icon}
        </span>
    )
}


export default Icon