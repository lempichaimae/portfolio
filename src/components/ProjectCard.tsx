export interface Project {
    title: string;
    description: string;
    technologies: string[];
    icon: string;
    type: 'university' | 'personal';
    link: string;
}
const ProjectCard = ({ project }: { project: Project }) => {
    const handleClick = (link: string) => () => {
        window.open(link, '_blank');
    }
    return (
        <div className="flex flex-col group overflow-hidden transition-all duration-500 p-6 rounded-lg bg-purple-100 relative hover:bg-purple-200 hover:cursor-pointer" 
        onClick={handleClick(project.link)}>
            <img src={project.icon} alt="icon" 
            className="w-16 h-16 absolute transition-all duration-500 -top-4 -right-4 rotate-45 group-hover:rotate-0"/>
            <div className="flex flex-col gap-4 w-full">
                <div className="text-lg font-mavenPro pr-12 text-[#3E333F] font-bold">{project.title}</div>
                <div className="text-sm font-mavenPro w-4/5">{project.description}</div>
                <div className="flex gap-2 justify-between">
                    <div className="text-sm font-mavenPro text-[#3E333F] flex gap-1">
                        <span>💻</span>
                        {project.technologies.join(', ')}
                    </div>
                    <div className="text-sm font-mavenPro text-[#3E333F]">
                        {project.type === 'university' ? 'University' : 'Personal'}
                    </div>
                </div>
                
            </div>
        </div>
    );
}
export default ProjectCard;