
interface DescriptionProps {
    icon: string;
    title: string;
    position: string|null;
    description: string;
}

const Description: React.FC<DescriptionProps> = (props) => {    
    return (
        <div className=" w-full md:w-2/3 h-80 pt-16">
            <div className="flex flex-col  relative text-6xl font-mavenPro text-[#3E333F] font-bold">
                <div className="absolute right-0 -top-12">
                    <img src={props.icon} alt="icon" className="w-16 h-16 animate-pulse" />
                </div>
                {props.title}
            </div>
            <div className="text-sm font-mavenPro text-[#AA56B9]">{props.position}</div>
            <div className="text-sm font-mavenPro mt-10">{props.description}</div>
        </div>
    );
};
export default Description;