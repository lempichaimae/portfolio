
interface DescriptionProps {
    icon: string;
    title: string;
    position: string;
    description: string;
}

const Description: React.FC<DescriptionProps> = (props) => {    
    return (
        <div className="w-2/3 h-80">
            <div className="flex flex-col  relative text-8xl font-mavenPro text-[#3E333F] font-bold">
                <div className="absolute right-0">
                    <img src={props.icon} alt="icon" className="w-16 h-16" />
                </div>
                {props.title}
            </div>
            <div className="text-lg font-mavenPro text-[#AA56B9]">{props.position}</div>
            <div className="text-lg font-mavenPro mt-10">{props.description}</div>
        </div>
    );
};
export default Description;