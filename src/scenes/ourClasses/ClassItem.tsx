type Props = {
    name : string;
    description ?: string;
    image : string
}

const ClassItem = ({name, description, image}:Props) =>{
    const overlayStyle = `absolute p-5 z-30 flex flex-col items-center justify-center 
    h-[380px] w-[450px] text-white bg-primary-500 opacity-0 transition duration-500 whitespace-normal
    text-center hover:opacity-90`;

    return <li className="relative mx-5 inline-block h-[380px] w-[450px]">
        <div className={overlayStyle}>
            <p className="text-2xl">{name}</p>
            <p className="mt-5">{description}</p>
        </div>
        <img src={image} alt={image}/>

    </li>

}
export default ClassItem