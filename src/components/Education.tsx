import Description from "./Description";
import EducationIcon from '../assets/icon_education.svg';

const education = [
  {
    title: "Master MIAGE",
    school: "Université Paul Sabatier, Toulouse, France",
    tags: ["Project Management"],
  },
  {
    title: "Licence MIAGE",
    school: "Université Paul Sabatier, Toulouse, France",
    tags: ["Web development"],
  },
];

function Education() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-screen">
      <div className="flex justify-center items-center h-full">
        <Description
          icon={EducationIcon}
          title="Education"
          position=""
          description="I am a software developer with experience in web development. I am currently learning React and TypeScript. I am also learning how to use Tailwind CSS to style my web applications. I am looking for a job as a software developer."
        />
      </div>

      {/* Right Section: Vertical line, circles, and cards */}
      <div className="h-3/4 flex items-center relative">
        <div className="h-full w-full absolute -right-24">
          {/* Vertical Line */}
          <div className="hidden sm:block absolute left-1/2 top-0 h-full w-1.5 rounded bg-[#AA56B9] opacity-90 transform -translate-x-1/2"></div>

          {/* Loop through education cards */}
          {education.map((edu, index) => (
            <div
              className={`grid grid-cols-1 sm:grid-cols-3 gap-4 items-center my-4`}
              key={index}
            >
              {/* Circle Position */}
              <div className={`flex justify-center items-center ${index % 2 === 0 ? 'sm:col-start-1 sm:col-end-2' : 'sm:col-start-3 sm:col-end-4'}`}>
                <div className="hidden sm:flex text-3xl z-10 h-8 w-8 bg-[#F8D2FF] border-[#AA56B9] rounded-full items-center justify-center border-4"></div>
              </div>

              {/* Card Position */}
              <div className={`sm:col-start-${index % 2 === 0 ? '2' : '1'} sm:col-end-${index % 2 === 0 ? '3' : '2'} flex justify-center`}>
                <div className="flex flex-col overflow-hidden p-4 rounded-lg bg-purple-100 relative w-[250px] hover:bg-purple-200 transition-all duration-500">
                  <div className="flex flex-col gap-2 w-full">
                    <div className="text-lg font-mavenPro pr-12 text-[#3E333F] font-bold">
                      {edu.title}
                    </div>
                    <div className="text-sm font-mavenPro">{edu.school}</div>
                    <div className="text-sm font-mavenPro text-[#3E333F] flex gap-1">
                      <span>📚</span>
                      {edu.tags.map((tag, tagIndex) => (
                        <span key={tagIndex}>{tagIndex === 0 ? " " : ", "}{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
