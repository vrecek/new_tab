import { ISliderArrow } from "@/interfaces/interfaces"
import Icon from "../common/Icon"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"


const SliderArrow = ({ direction, fn }: ISliderArrow) => {
    return (
        <Icon  
            icon={ direction === 'left' ? <IoIosArrowBack /> : <IoIosArrowForward /> }
            cname="direction-arrow"
            clickfn={(e) => fn(e, direction)}
        />
    )
}

export default SliderArrow