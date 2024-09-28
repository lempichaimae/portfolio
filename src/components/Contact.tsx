import ContactIcon from '../assets/icon_contact.svg';

const Contact = () => {
    const handleClick = (clicked:string) => {
        if(clicked === "email"){
        window.open('mailto:chaimae.khamma@gmail.com');
        } else if(clicked === "linkedin"){
            window.open('https://www.linkedin.com/in/chaimae-khamma-62ba02192/');
        } else if(clicked === "instagram"){
            window.open('https://www.instagram.com/chaimae_khamma/?locale=%E5%93%AA%E9%87%8C%E8%83%BD%E5%8A%9E%E8%8A%AC%E5%85%B0%E6%8E%88%E6%9D%83%E4%B9%A6%E8%81%94%E7%B3%BB%7B%E5%A8%81%E4%BF%A1%2BTG%2F%E9%A3%9E%E6%9C%BA%3A%40buth2788%7DHviMd%3F%3F%3F%3F%3F%3F%D1%A7%3F%3F%C6%BEW0UyS&hl=en');
        } else if(clicked === "twitter"){
            window.open('https://x.com/KhammaChaimae');
        }

    }
    return (
        <div className="flex flex-col  gap-12 items-center justify-center h-screen relative">
            <div className='text-6xl font-mavenPro text-[#3E333F] font-bold'>
                <div className="absolute -mt-16 ml-56"> 
                    <img src={ContactIcon} alt="icon" className="w-16 h-16 animate-pulse" />
                </div>
            contact
            </div>
           
            <div className='flex flex-row gap-20'>
                <div className='text-base font-mavenPro text-[#3E333F] hover:cursor-pointer' onClick={() => handleClick("email")}>
                    email
                </div>
                <div className='text-base font-mavenPro text-[#3E333F] hover:cursor-pointer' onClick={() => handleClick("linkedin")}>
                    linkendin
                </div>
                <div className='text-base font-mavenPro text-[#3E333F] hover:cursor-pointer' onClick={() => handleClick("instagram")}>
                    instagram
                </div>
                <div className='text-base font-mavenPro text-[#3E333F] hover:cursor-pointer' onClick={() => handleClick("twitter")}>
                    twitter
                </div>
            </div>
        </div>

    );
}

export default Contact;
