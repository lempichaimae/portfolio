import { Link, scroller } from 'react-scroll';
import React, { useEffect, useState } from 'react';
interface NavBarProps {
    chaimae: React.RefObject<HTMLDivElement>;
    projects: React.RefObject<HTMLDivElement>;
}
const NavBar :  React.FC<NavBarProps> = (props) =>{
    const [activeLink, setActiveLink] = useState('chaimae');
    useEffect(() => {
        console.log(activeLink);
    }
    , [activeLink]);
    const handleClick = (element: string) => {
        if (element === 'chaimae') {
            props.chaimae.current?.scrollIntoView({ behavior: 'smooth' });
            setActiveLink('chaimae');
        } else if (element === 'projects') {
            props.projects.current?.scrollIntoView({ behavior: 'smooth'});
            setActiveLink('projects');
        }
    }


    return (
        <div className="flex justify-between items-center w-full h-10 bg-inherit px-10 fixed top-0 left-0 z-10 ">
            <div className="flex">
                <button 
                    className={`text-lg font-mavenPro text-[#3E333F] cursor-pointer relative 
                        ${activeLink === 'chaimae' ? 'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[#AA56B9] after:w-1/2 after:rounded' : ''}`}
                        onClick={() => handleClick('chaimae')}
                >
                    chaimae
                </button>
            </div>
            <div className="flex space-x-10 ml-auto">
                <button 
                    className={`text-lg font-mavenPro text-[#3E333F] cursor-pointer
                        ${activeLink === 'projects' ? 'after:content-[""] after:absolute  after:right-0 after:bottom-0 after:h-[2px] after:bg-[#AA56B9] after:w-1/2 after:rounded' : ''}`}
                        onClick={() => handleClick('projects')} 
                >
                    projects
                </button>
                <Link 
                    to="education" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    className={`text-lg font-mavenPro text-[#3E333F] cursor-pointer
                        ${activeLink === 'education' ? 'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[#AA56B9] after:w-1/2 after:rounded' : ''}`}
                    onSetActive={() => setActiveLink('education')}
                >
                    education
                </Link>
                <Link 
                    to="contact" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    className={`text-lg font-mavenPro text-[#3E333F] cursor-pointer 
                        ${activeLink === 'contact' ? 'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[#AA56B9] after:w-1/2 after:rounded' : ''}`}
                    onSetActive={() => setActiveLink('contact')}
                >
                    contact
                </Link>
            </div>
        </div>
    );
}

export default NavBar;