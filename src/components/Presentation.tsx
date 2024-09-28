
import Idea from '../assets/icon_idea.svg';
import Clavier from '../assets/img_clavier.svg';
import Flowers from '../assets/img_flowers.svg';
import Chefchaouen from '../assets/img_chefchaouen.svg';
import Sky from '../assets/img_sky.svg';
import Arrow from '../assets/icon_arrow.svg';
import Description from './Description';
const Presentation = () => {
    return (
      
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-screen">
      <div className="flex flex-col justify-center items-center h-full mt-12 lg:mt-0">
            <Description
              icon={Idea}
              title="chaimae" 
              position="Software Developer"
              description="I am a software developer with experience in web development. I am currently learning React and TypeScript. I am also learning how to use Tailwind CSS to style my web applications. I am looking for a job as a software developer.">
            </Description>
            <img src={Arrow} alt="arrow" className="w-6 mt-16 mr-96"/>
            </div>
            <div className='flex justify-center lg:justify-end'>
              <div className="flex flex-col gap-2 w-72 h-[450px]">
                <img src={Clavier} alt="clavier"/>
                <div className="flex flex-row gap-2 h-3/5">
                  <div className="flex flex-col gap-2 h-full flex-1">
                    <img src={Flowers} alt="flowers" className='object-cover h-40 w-full rounded-lg'/>
                    <img src={Chefchaouen} alt="chefchaouen" className='object-cover h-32 w-full rounded-lg'/>
                  </div>
                  <img src={Sky} alt="sky" className='object-cover h-[296px] flex-1 rounded-lg'/>
                </div> 
              </div>
            </div>
            
       
    </div>
        
          
    );
}
export default Presentation;
