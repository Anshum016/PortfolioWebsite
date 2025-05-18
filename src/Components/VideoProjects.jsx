import React from 'react'
import { RiGithubLine } from 'react-icons/ri'

const VideoProjects = () => {
  const videoProjects = [
    {
      id: 1,
      title: 'GitHub Repository Summarizer',
      description: 'A demonstration of the AI-powered GitHub repository summarizer that provides concise summaries of codebases, helping developers quickly understand project structure and key components.',
      videoUrl: '/Git_hub_repo_Summarizer.mp4', // Updated to match the actual file name
      thumbnail: '/Thumbnail1.png'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-36 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4" style={{ color: 'white' }}>Project Video</h2>
        <p className="text-center mb-12" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Watch my project in action</p>
        
        <div className="max-w-3xl mx-auto">
          {videoProjects.map((project) => (
            <div key={project.id} className="bg-white shadow-lg rounded-xl overflow-hidden" style={{ backgroundColor: 'rgba(25, 22, 39, 0.5)' }}>
              <div className="relative aspect-video">
                <video 
                  className="w-full h-full object-cover"
                  poster={project.thumbnail}
                  controls
                >
                  <source src={project.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'white' }}>{project.title}</h3>
                <p className="mb-4" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            Want to see more of my work? Check out my GitHub repository for detailed project documentation and code.
          </p>
          <a 
            href="https://github.com/Anshum016" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors font-medium"
            style={{ 
              backgroundColor: 'var(--accent-color)', 
              color: 'white',
              boxShadow: '0 4px 15px rgba(67, 97, 238, 0.3)'
            }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = '#3451d1'} 
            onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--accent-color)'}
          >
            <RiGithubLine className="w-5 h-5" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </div>
  )
}

export default VideoProjects 