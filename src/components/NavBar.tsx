import { Link } from 'react-scroll';
import React, { useEffect, useState } from 'react';
import NavButton from './NavButton';

interface NavBarProps {
  chaimae: React.RefObject<HTMLDivElement>;
  projects: React.RefObject<HTMLDivElement>;
  education: React.RefObject<HTMLDivElement>;
}

const NavBar: React.FC<NavBarProps> = ({ chaimae, projects, education }) => {
  const [activeLink, setActiveLink] = useState('chaimae');

  // Handle section observation using IntersectionObserver
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      threshold: 0.5, // 50% of the section should be visible to trigger the observer
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveLink(sectionId); // Set the active link based on the visible section
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const chaimaeSection = chaimae.current;
    const projectsSection = projects.current;
    const educationSection = education.current;

    if (chaimaeSection) observer.observe(chaimaeSection);
    if (projectsSection) observer.observe(projectsSection);
    if (educationSection) observer.observe(educationSection);

    return () => {
      if (chaimaeSection) observer.unobserve(chaimaeSection);
      if (projectsSection) observer.unobserve(projectsSection);
      if (educationSection) observer.unobserve(educationSection);
    };
  }, [chaimae, projects]);

  const handleClick = (element: string) => {
    if (element === 'chaimae') {
      chaimae.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      setActiveLink('chaimae');
    } else if (element === 'projects') {
        projects.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      setActiveLink('projects');
    } else if (element === 'education') {
        education.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      setActiveLink('education');
    }
  };

  return (
    <div className="flex justify-between items-center w-full h-10 bg-white/30 backdrop-blur-xl px-10 fixed top-0 left-0 z-10">
      <div className="flex">
        <NavButton 
          label="chaimae" 
          active={activeLink === 'chaimae'} 
          onClick={() => handleClick('chaimae')}
        />
      </div>
      <div className="flex space-x-10 ml-auto">
        <NavButton 
          label="projects" 
          active={activeLink === 'projects'} 
          onClick={() => handleClick('projects')} 
        />
       <div className="flex space-x-10 ml-auto">
        <NavButton 
          label="education" 
          active={activeLink === 'education'} 
          onClick={() => handleClick('education')} 
        />
        </div>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className={`text-sm font-mavenPro text-[#3E333F] cursor-pointer
            ${activeLink === 'contact' ? 'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[#AA56B9] after:w-1/2 after:rounded' : ''}`}
          onSetActive={() => setActiveLink('contact')}
        >
          contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
