import Description from "./Description";
import EducationIcon from '../assets/icon_education.svg';
import Descriptions from "../data/Descriptions";

const education = [
  {
    title: "Master MIAGE",
    school: "Université Paul Sabatier, Toulouse, France",
    tags: ["Project Management, Cybersecurity, Big Data, AI, Cloud Computing"],
  },
  {
    title: "Licence MIAGE",
    school: "Université Paul Sabatier, Toulouse, France",
    tags: ["Web development, Databases, Project Management, Information Systems"],
  },
  {
    title: "Licence AES",
    school: "Université Sophia Antipolis, Nice, France",
    tags: ["Management, Economics, Law, Statistics, Accounting"],
  },
];

const Education = () => {
  return (
    <div className="grid grid-lig-2 lg:grid-cols-2 items-center h-full md:h-screen gap-4">
      <div className="flex pb-7 md:pb-0 justify-center items-center h-full">
        <Description
          icon={EducationIcon}
          title={Descriptions.Education.title}
          position={null}
          description={Descriptions.Education.description}
        />
      </div>
      <div className="h-full flex items-center relative">
        <div className="h-full w-full absolute">
          <div className="hidden sm:block absolute left-1/2 top-0 h-3/4 w-1.5 rounded bg-[#AA56B9] opacity-90 transform -translate-x-1/2"></div>
          {education.map((edu, index) => (
            <div
              className={`grid grid-cols-1 sm:grid-cols-3 gap-2 items-center my-3 `}
              key={index}
            >
              {index % 2 === 0 ? (
                <>
                  <div className={`flex justify-center items-center sm:col-start-2 sm:col-end-3`}>
                    <div className="hidden sm:flex text-3xl z-10 h-8 w-8 bg-[#F8D2FF] border-[#AA56B9] rounded-full items-center justify-center border-4"></div>
                  </div>
                  <div className={`sm:col-start-3 sm:col-end-4 flex justify-center lg:-ml-28`}>
                    <div className="flex flex-col overflow-hidden p-3 rounded-lg bg-purple-100 relative w-full md:w-[250px] hover:bg-purple-200 transition-all duration-500">
                      <div className="flex flex-col gap-2 w-full">
                        <div className="text-lg font-mavenPro pr-12 text-[#3E333F] font-bold">
                          {edu.title}
                        </div>
                        <div className="text-sm font-mavenPro">{edu.school}</div>
                        <div className="text-sm font-mavenPro text-[#3E333F] flex gap-1">
                          <span>📚</span>
                          {edu.tags.map((tag, tagIndex) => (
                            <span key={tagIndex}>{tagIndex === 0 ? "" : ", "}{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className={`sm:col-start-1 sm:col-end-2 flex justify-center lg:-mr-28`}>
                    <div className="flex flex-col overflow-hidden p-3 rounded-lg bg-purple-100 relative w-full md:w-[250px] hover:bg-purple-200 transition-all duration-500">
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
                  <div className={`flex justify-center items-center sm:col-start-2 sm:col-end-3`}>
                    <div className="hidden sm:flex text-3xl z-10 h-8 w-8 bg-[#F8D2FF] border-[#AA56B9] rounded-full items-center justify-center border-4"></div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
