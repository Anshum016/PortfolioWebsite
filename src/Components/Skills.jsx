import React from 'react'
import { 
  SiReact, 
  SiJavascript, 
  SiHtml5, 
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiFlask,
  SiTensorflow,
  SiPytorch,
  SiOpencv
} from 'react-icons/si'
import { RiAiGenerate } from 'react-icons/ri'

const Skills = () => {
  const frontendSkills = [
    { name: 'React.js', level: 85, icon: <SiReact /> },
    { name: 'JavaScript', level: 80, icon: <SiJavascript /> },
    { name: 'HTML/CSS', level: 85, icon: <SiHtml5 /> },
    { name: 'Tailwind CSS', level: 80, icon: <SiTailwindcss /> },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 75, icon: <SiNodedotjs /> },
    { name: 'Python', level: 85, icon: <SiPython /> },
    { name: 'MongoDB', level: 70, icon: <SiMongodb /> },
    { name: 'Flask', level: 75, icon: <SiFlask /> },
  ];

  const aiSkills = [
    { name: 'TensorFlow', level: 80, icon: <SiTensorflow /> },
    { name: 'PyTorch', level: 75, icon: <SiPytorch /> },
    { name: 'Computer Vision', level: 80, icon: <SiOpencv /> },
    { name: 'NLP', level: 75, icon: <RiAiGenerate /> },
  ];

  return (
    <div className="min-h-screen pt-24 pb-36 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4" style={{ color: 'white' }}>Skills</h2>
        <p className="text-center mb-12" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>My technical expertise</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AI/ML Skills */}
          <div className="bg-white shadow-lg rounded-xl p-6" style={{ backgroundColor: 'rgba(25, 22, 39, 0.5)' }}>
            <h3 className="text-xl font-semibold mb-6 text-center" style={{ color: 'white' }}>AI/ML Development</h3>
            <div className="grid grid-cols-2 gap-8">
              {aiSkills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-2 text-xl"
                    style={{ 
                      backgroundColor: 'rgba(67, 97, 238, 0.1)',
                      color: 'var(--accent-color)'
                    }}
                  >
                    {skill.icon}
                  </div>
                  <p className="font-medium" style={{ color: 'white' }}>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend Skills */}
          <div className="bg-white shadow-lg rounded-xl p-6" style={{ backgroundColor: 'rgba(25, 22, 39, 0.5)' }}>
            <h3 className="text-xl font-semibold mb-6 text-center" style={{ color: 'white' }}>Frontend Development</h3>
            <div className="grid grid-cols-2 gap-8">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-2 text-xl"
                    style={{ 
                      backgroundColor: 'rgba(67, 97, 238, 0.1)',
                      color: 'var(--accent-color)'
                    }}
                  >
                    {skill.icon}
                  </div>
                  <p className="font-medium" style={{ color: 'white' }}>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Backend Skills */}
          <div className="bg-white shadow-lg rounded-xl p-6" style={{ backgroundColor: 'rgba(25, 22, 39, 0.5)' }}>
            <h3 className="text-xl font-semibold mb-6 text-center" style={{ color: 'white' }}>Backend Development</h3>
            <div className="grid grid-cols-2 gap-8">
              {backendSkills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-2 text-xl"
                    style={{ 
                      backgroundColor: 'rgba(67, 97, 238, 0.1)',
                      color: 'var(--accent-color)'
                    }}
                  >
                    {skill.icon}
                  </div>
                  <p className="font-medium" style={{ color: 'white' }}>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
