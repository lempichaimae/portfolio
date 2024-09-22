
import NavBar from './components/NavBar';
import Presentation from './components/Presentation';
import Projects from './components/Projects';
import { useRef } from 'react';
function App() {
  const chaimaeRef = useRef<HTMLDivElement| null>(null);
  const projectsRef = useRef<HTMLDivElement| null>(null);

  return (
    <>
      <div className="text-3xl bg-[#9D87CF0D] w-screen h-screen overflow-y-auto">
        <div className="ml-32 mr-32">
          <NavBar
          chaimae={chaimaeRef}
          projects={projectsRef}
          />
          <div ref={chaimaeRef} id="chaimae" className="h-screen">
            <Presentation/>
          </div>
         <div ref= {projectsRef} id="projects" className="h-screen">
         <Projects/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
