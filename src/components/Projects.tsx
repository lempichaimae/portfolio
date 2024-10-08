import Description from "./Description";
import Stars from '../assets/icon_stars.svg';
import ProjectCard, { Project } from "./ProjectCard";
import Descriptions from "../data/Descriptions";
import Wasabi from '../assets/img_wasabi.svg';
import Tree from '../assets/img_tree.png';
import Logo from '../../public/logo.png';
const Projects = () => {
    const projects: Project[] = [
        {
            title: 'Wasabi Dataviz',
            description: "I've worked with the Wasabi API, which offers a wealth of music data. I processed this data to extract the information I needed using Python and visualized it using a bar chart for analysis. Click to view the results.",
            technologies: ['Vue', 'Python', 'D3.js'],
            icon: Wasabi,
            type: 'university',
            link: 'https://wasabi-project.github.io/wasabi-dataviz/#/'
        },
        {
            title: 'MyGreenWorld',
            description: 'Designing and developing a 3D game inspired by the BeGreen theme as part of the CGI GamesOnWeb competition. Click to play!',
            technologies: ['Vue', 'Babylon.js','Jira'],
            icon: Tree,
            type: 'university',
            link: 'https://mygreenworld.netlify.app/'
        },
        {
            title: 'Portfolio',
            description: 'Building my personal portfolio website to showcase my projects and skills. Click to view the code.',
            technologies: ['React', 'TypeScript', 'Tailwind CSS'],
            icon: Logo,
            type: 'personal',
            link: 'https://github.com/lempichaimae/portfolio'
        }
    ];

    return (
        <div className="grid grid-lig-2 lg:grid-cols-2 items-center h-full md:h-screen gap-8">
            <div className="flex flex-col gap-2 order-2 lg:order-1">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
            <div className="flex pb-6 md:pb-0 justify-center lg:justify-end order-1 lg:order-2">
                <Description
                    icon={Stars}
                    title={Descriptions.Projects.title}
                    position={null}
                    description={Descriptions.Projects.description}
                />
            </div>
        </div>
    );
}

export default Projects;
