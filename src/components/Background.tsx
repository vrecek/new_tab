import { IBackground } from "@/interfaces/interfaces"


const Background = ({ bg, opacity }: IBackground) => {
    return (
        <figure style={{ opacity }} className="background-image">

            <img 
                src={bg}
                alt='background' 
            />

        </figure>
    )
}


export default Background