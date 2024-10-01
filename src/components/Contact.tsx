import ContactIcon from '../assets/icon_contact.svg';

const Contact = () => {
    const handleClick = (clicked:string) => {
        if(clicked === "email"){
        window.open('mailto:chaimae.khamma@gmail.com');
        } else if(clicked === "linkedin"){
            window.open('https://www.linkedin.com/in/chaimae-khamma-62ba02192/');
        } else if(clicked === "github"){
            window.open('https://github.com/lempichaimae');
        }
    }
    return (
        <div className="flex flex-col gap-6 md:gap-12 items-center justify-center h-screen relative">
            <div className='text-6xl font-mavenPro text-[#3E333F] mt-[550px] md:mt-0 font-bold'>
                <div className="absolute md:-mt-16 ml-56"> 
                    <img src={ContactIcon} alt="icon" className="w-12 h-12 md:w-16 md:h-16 animate-pulse" />
                </div>
            contact
            </div>
            <div className='flex flex-col gap-3 md:flex-row md:gap-20'>
                <div className='text-base font-mavenPro text-[#3E333F] hover:cursor-pointer transition-all duration-500 opacity-50 hover:opacity-100' onClick={() => handleClick("email")}>
                    email↗️
                </div>
                <div className='text-base font-mavenPro text-[#3E333F] hover:cursor-pointer transition-all duration-500 opacity-50 hover:opacity-100' onClick={() => handleClick("linkedin")}>
                    linkedin↗️
                </div>
                <div className='text-base font-mavenPro text-[#3E333F] hover:cursor-pointer transition-all duration-500 opacity-50 hover:opacity-100' onClick={() => handleClick("github")}>
                    github↗️
                </div>
            </div>
        </div>

    );
}

export default Contact;