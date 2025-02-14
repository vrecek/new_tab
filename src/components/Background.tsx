import { IBackground } from "@/interfaces/interfaces"


const Background = ({ bg }: IBackground) => {
    return (
        <img 
            src={bg}
            alt='background' 
            className='background'
        />
    )
}


export default Background