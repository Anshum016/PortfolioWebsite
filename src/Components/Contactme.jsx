import React, { useState } from 'react'
import { RiPhoneLine, RiMailLine, RiMapPinLine } from 'react-icons/ri'
import { FaGithub } from 'react-icons/fa'

const Contactme = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log(formData);
    alert('Thank you for your message! I will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      project: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      title: 'Call Me',
      value: '+91 7048680231',
      icon: <RiPhoneLine className="w-6 h-6" />
    },
    {
      title: 'Email',
      value: 'anshumjani.2004@gmail.com',
      link: 'mailto:anshumjani.2004@gmail.com',
      icon: <RiMailLine className="w-6 h-6" />
    },
    {
      title: 'Location',
      value: 'Vadodara,Gujarat, India',
      icon: <RiMapPinLine className="w-6 h-6" />
    },
    {
      title: 'GitHub',
      value: 'Anshum016',
      link: 'https://github.com/Anshum016',
      icon: <FaGithub className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-36 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4" style={{ color: 'white' }}>Contact Me</h2>
        <p className="text-center mb-12" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Get in touch</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center" style={{ backgroundColor: 'rgba(25, 22, 39, 0.5)' }}>
              <div className="text-blue-600 mb-4">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'white' }}>{info.title}</h3>
              {info.link ? (
                <a href={info.link} className="hover:text-blue-600" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{info.value}</a>
              ) : (
                <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{info.value}</p>
              )}
            </div>
          ))}
        </div>
        
        <div className="bg-white shadow-lg rounded-xl p-8" style={{ backgroundColor: 'rgba(25, 22, 39, 0.5)' }}>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block font-medium mb-2" style={{ color: 'white' }}>Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-medium mb-2" style={{ color: 'white' }}>Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="project" className="block font-medium mb-2" style={{ color: 'white' }}>Project</label>
              <input 
                type="text" 
                id="project" 
                name="project" 
                value={formData.project}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block font-medium mb-2" style={{ color: 'white' }}>Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                rows="5" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full md:w-auto py-3 px-8 rounded-lg transition-colors font-medium"
              style={{ 
                backgroundColor: 'var(--accent-color)', 
                color: 'white',
                boxShadow: '0 4px 15px rgba(67, 97, 238, 0.3)'
              }}
              onMouseOver={e => e.currentTarget.style.backgroundColor = '#3451d1'} 
              onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--accent-color)'}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contactme
