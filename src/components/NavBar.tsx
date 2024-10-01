import React, { useEffect, useState } from 'react';
import NavButton from './NavButton';

interface NavBarProps {
  chaimae: React.RefObject<HTMLDivElement>;
  projects: React.RefObject<HTMLDivElement>;
  education: React.RefObject<HTMLDivElement>;
  contact: React.RefObject<HTMLDivElement>;
}

const NavBar: React.FC<NavBarProps> = ({ chaimae, projects, education, contact }) => {
  const [activeLink, setActiveLink] = useState('chaimae');

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5, 
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveLink(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const chaimaeSection = chaimae.current;
    const projectsSection = projects.current;
    const educationSection = education.current;
    const contactSection = contact.current;

    if (chaimaeSection) observer.observe(chaimaeSection);
    if (projectsSection) observer.observe(projectsSection);
    if (educationSection) observer.observe(educationSection);
    if (contactSection) observer.observe(contactSection);

    return () => {
      if (chaimaeSection) observer.unobserve(chaimaeSection);
      if (projectsSection) observer.unobserve(projectsSection);
      if (educationSection) observer.unobserve(educationSection);
      if (contactSection) observer.unobserve(contactSection);
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
    else if (element === 'contact') {
      contact.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    setActiveLink('contact');
  }
  };

  return (
    <div className="flex justify-between items-center w-full h-10 bg-white/30 backdrop-blur-xl px-4 md:px-10 fixed top-0 left-0 z-10">
      <div className="flex">
        <NavButton 
          label="chaimae" 
          active={activeLink === 'chaimae'} 
          onClick={() => handleClick('chaimae')}
        />
      </div>
      <div className="flex space-x-2 lg:space-x-10 ml-auto">
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
        <div className="flex space-x-10 ml-auto">
        <NavButton 
          label="contact" 
          active={activeLink === 'contact'} 
          onClick={() => handleClick('contact')} 
        />
        </div>
      </div>
    </div>
  );
};
export default NavBar;
