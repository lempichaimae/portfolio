import Description from "./Description";
import Stars from '../assets/icon_stars.svg';
import ProjectCard, { Project } from "./ProjectCard";
import Clavier from '../assets/img_clavier.svg';

const Projects = () => {
    const projects : Project[] = [
        {
            title: 'Project 1',
            description: 'This is a project description',
            technologies: ['React', 'TypeScript'],
            icon: Clavier,
            type: 'personal',
            link: 'https://www.google.com'
        },
        {
            title: 'Project 2',
            description: 'This is a project description This is a project description',
            technologies: ['Tailwind CSS'],
            icon: Clavier,
            type: 'university',
            
            link: 'https://www.google.com'
        },
        {
            title: 'Project 3',
            description: 'This is a project description',
            technologies: ['React', 'TypeScript'],
            icon: Clavier,
            type: 'personal',
            link: 'https://www.google.com'
        }
    ]
    return (
        <div className="grid grid-cols-2 items-center h-screen gap-8">
        <div className="flex flex-col gap-2">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project}/>
            ))}
        </div>
        <div className="flex justify-end">
        <Description
            icon={Stars}
            title="projects"
            position={null}
            description="I am currently working on a project using React and TypeScript. I am also working on a project using Tailwind CSS. I am learning how to use Tailwind CSS to style my web applications. I am also learning how to use React and TypeScript to build web applications.">
        </Description>
        </div>
        </div>
    );
}
export default Projects;