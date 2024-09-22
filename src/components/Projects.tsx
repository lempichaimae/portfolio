import Description from "./Description";
import Stars from '../assets/icon_stars.svg';

const Projects = () => {
    return (
        <div className="grid grid-cols-2 items-center h-screen">
        <div/>
        <Description
            icon={Stars}
            title="projects"
            position={null}
            description="I am currently working on a project using React and TypeScript. I am also working on a project using Tailwind CSS. I am learning how to use Tailwind CSS to style my web applications. I am also learning how to use React and TypeScript to build web applications.">
        </Description>
        </div>
    );
}
export default Projects;