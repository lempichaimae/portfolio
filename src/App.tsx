import Description from './components/Description';
import NavBar from './components/NavBar';
import Idea from './assets/icon_idea.svg';
import Clavier from './assets/img_clavier.svg';
function App() {

  return (
    <>
      <div className="text-3xl bg-[#9D87CF0D] w-screen h-screen">
        <div className="ml-32 mr-32">
          <NavBar/>
          <div className="grid grid-cols-2 items-center h-screen">
            <Description 
              icon={Idea}
              title="chaimae" 
              position="Software Developer"
              description="I am a software developer with experience in web development. I am currently learning React and TypeScript. I am also learning how to use Tailwind CSS to style my web applications. I am looking for a job as a software developer.">
            </Description> 
           
            <img src={Clavier} alt="clavier" className="w-96 h-96 flex mx-auto right-0"/>
          </div>
          {/* <div className='flex flex-col'>
        
            <Description 
              icon={Idea}
              title="chaimae" 
              position="Software Developer"
              description="I am a software developer with experience in web development. I am currently learning React and TypeScript. I am also learning how to use Tailwind CSS to style my web applications. I am looking for a job as a software developer.">
            </Description> 
       
          <img src={Clavier} alt="clavier" className="w-96 h-96"/>
          </div> */}
          
         
        </div>
      </div>
    </>
  )
}

export default App
