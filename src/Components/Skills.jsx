import React from 'react'

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML', level: 90, icon: 'html' },
    { name: 'CSS', level: 85, icon: 'css' },
    { name: 'JavaScript', level: 80, icon: 'javascript' },
    { name: 'React', level: 75, icon: 'react' },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 70, icon: 'nodejs' },
    { name: 'MongoDB', level: 65, icon: 'mongodb' },
    { name: 'Firebase', level: 75, icon: 'firebase' },
    { name: 'TypeScript', level: 60, icon: 'typescript' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-36 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4" style={{ color: 'white' }}>Skills</h2>
        <p className="text-center mb-12" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>My tech stack</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
