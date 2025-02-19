import { ISliderArrow } from "@/interfaces/interfaces"
import Icon from "../common/Icon"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"


const SliderArrow = ({ direction, fn, cname }: ISliderArrow) => {
    return (
        <Icon  
            icon={ direction === 'left' ? <IoIosArrowBack /> : <IoIosArrowForward /> }
            cname={`direction-arrow ${cname}`}
            clickfn={(e) => fn(e, direction)}
        />
    )
}

export default SliderArrow