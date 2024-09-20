import { Link } from 'react-scroll';
import { useState } from 'react';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('chaimae');

    return (
        <div className="flex justify-between items-center w-full h-20 px-10">
            <div className="flex">
                <Link 
                    to="chaimae" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    className={`text-lg font-mavenPro text-[#3E333F] cursor-pointer relative 
                        ${activeLink === 'chaimae' ? 'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[#AA56B9] after:w-1/2 after:rounded' : ''}`}
                    onSetActive={() => setActiveLink('chaimae')}
                >
                    chaimae
                </Link>
            </div>
            <div className="flex space-x-10 ml-auto">
                <Link 
                    to="projects" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    className={`text-lg font-mavenPro text-[#3E333F] cursor-pointer
                        ${activeLink === 'projects' ? 'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[#AA56B9] after:w-1/2 after:rounded' : ''}`}
                    onSetActive={() => setActiveLink('projects')}
                >
                    projects
                </Link>
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
