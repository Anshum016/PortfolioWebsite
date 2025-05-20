import React from 'react'
import { FaGithub } from 'react-icons/fa'

const VideoProjects = () => {
  return (
    <div className="min-h-screen pt-28 pb-24 px-4 sm:px-6" style={{ backgroundColor: 'var(--bg-color-primary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4" style={{ color: 'white' }}>Project Video</h2>
        <p className="text-center mb-12" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Watch my project in action</p>
        
        <div className="max-w-3xl mx-auto">
          {/* GitHub Repository Summarizer */}
          <div className="bg-opacity-50 rounded-xl overflow-hidden shadow-lg" style={{ backgroundColor: 'rgba(25, 22, 39, 0.5)' }}>
            <div className="aspect-video w-full">
              <video 
                controls
                className="w-full h-full object-cover"
                poster="/Thumbnail1.png"
                muted
                autoPlay
              >
                <source src="/GithubrepoSummarizer.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3" style={{ color: 'white' }}>GitHub Repository Summarizer</h3>
              <p className="mb-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                An AI-powered tool that analyzes GitHub repositories and provides comprehensive summaries. 
                Features include repository statistics, code analysis, and dependency insights.
              </p>
              <div className="flex items-center gap-2">
                <FaGithub className="text-xl" style={{ color: 'var(--accent-color)' }} />
                <a 
                  href="https://github.com/Anshum016" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:underline"
                  style={{ color: 'var(--accent-color)' }}
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoProjects 