import Contact from './components/Contact';
import Education from './components/Education';
import NavBar from './components/NavBar';
import Presentation from './components/Presentation';
import Projects from './components/Projects';
import { useRef } from 'react';
import './index.css';

function App() {
  const chaimaeRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const educationRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div className="text-3xl bg-[#9D87CF0D] w-screen min-h-screen flex flex-col overflow-x-hidden">
        <div className="max-w-7xl px-4 md:px-12 xl:px-16 flex-1 m-auto">
          <NavBar
            chaimae={chaimaeRef}
            projects={projectsRef}
            education={educationRef}
            contact={contactRef}
          />

          {/* Présentation Section */}
          <div ref={chaimaeRef} id="chaimae" className="min-h-screen py-8 min-w-full">
            <Presentation />
          </div>

          {/* Projects Section */}
          <div ref={projectsRef} id="projects" className="min-h-screen py-8 min-w-full">
            <Projects />
          </div>

          {/* Education Section */}
          <div ref={educationRef} id="education" className="min-h-screen py-8 min-w-full">
            <Education />
          </div>

          {/* Contact Section */}
          <div ref={contactRef} id="contact" className="min-h-screen py-8 min-w-full">
            <Contact />
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white py-4">
          <hr className="border-t border-[#9D87CF80] my-2" />
          <div className="text-center font-mavenPro text-[#3E333F] text-base">
            <p>made with 💜 by chaimae - 2024</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;