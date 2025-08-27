import React, { useState, useEffect } from 'react';
import { 
  Moon, 
  Sun, 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Download, 
  Mail, 
  Phone, 
  Github, 
  Linkedin,
  ExternalLink,
  User,
  Briefcase,
  Award,
  Cloud,
  Rocket,
  Server,
  MessageCircle
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const skills = [
    { name: 'Azure Cloud Engineering', icon: <Cloud className="w-8 h-8" />, level: 90 },
    { name: 'CI/CD', icon: <Rocket className="w-8 h-8" />, level: 80 },
    { name: 'Kubernetes', icon: <Server className="w-8 h-8" />, level: 70 },
    { name: 'Automation', icon: <Code className="w-8 h-8" />, level: 70 },
  ];

  const projects = [
    {
      title: 'Avanade - Cloud Infrastructure & DevOps Engineer',
      description: 'Currently working at Avanade as a Cloud Infrastructure & DevOps Engineer, contributing to a major project for a leading Italian energy provider. Certified Azure Administrator (AZ-104).',
      image: 'https://images1.the-dots.com/1496316/avanade-logo.jpeg?p=socialLarge',
      tech: ['Terraform', 'Kubernetes', 'DevOps', 'CI/CD', 'Helm', 'GitLab Admin', 'Azure Admin'],
    },
    {
      title: 'Threaded - Inventory App',
      description: 'Collaborative corporate inventory management application with real-time updates, a built-in db, and built with 5S rules in mind.',
      image: 'https://myassetstorageportfolio.blob.core.windows.net/assetsblob/Threaded_page2.png',
      tech: ['Python', 'Flask', 'API', 'SQLite'],
    },
    {
      title: 'Lab: Self-Hosted GitLab on Kubernetes',
      description: 'In my Azure lab I deployed a personal GitLab instance on Kubernetes using Helm. This setup simulates our client environments, allowing me to practice administration tasks such as upgrades, configuration, and troubleshooting — just like we do in production.',
      image: 'https://logodix.com/logo/258598.jpg',
      tech: ['Azure', 'Kubernetes', 'Helm', 'GitLab'],
    },
    {
      title: 'Infra as Code: Portfolio on Azure',
      description: 'I am building the underlying infrastructure of this very portfolio website on Azure DevOps using Terraform and CI/CD pipelines. This approach showcases my end-to-end skills: from Infrastructure as Code, to deployment automation, to running production-ready workloads on the cloud I manage myself.',
      image: 'https://th.bing.com/th/id/R.40c934e95067ba2660ba6c01253006a7?rik=mo%2fd8Rb17Ecy8A&pid=ImgRaw&r=0',
      tech: ['Azure', 'Terraform', 'Infrastructure as Code', 'DevOps'],
    },
    {
      title: 'Lab: Self-Hosted OpenAI on Azure',
      description: 'I deployed my own self-hosted OpenAI instance on Azure, leveraging cloud services and APIs to experiment with AI-powered applications. This setup allows me to explore integrations, automation scenarios, and real-world use cases for generative AI in a secure lab environment.',
      image: 'https://media.licdn.com/dms/image/D5612AQHVKUntJabZzw/article-cover_image-shrink_720_1280/0/1700904205908?e=2147483647&v=beta&t=tFHD7VsvxcTyC6MHF_N-dNPP9aCFaSIuswehhMvp0Do',
      tech: ['Azure', 'OpenAI', 'APIs', 'DevOps'],
    },
  ];

  const certifications = [
  {
    title: 'Microsoft Certified: AZ-900',
    description: 'Microsoft Azure Fundamentals certification, validating knowledge of core cloud concepts, Azure services, pricing, support, and basic cloud governance. Certification ID: 996655492',
    image: 'https://myassetstorageportfolio.blob.core.windows.net/assetsblob/AZ-900.png',
    tech: ['Azure Fundamentals', 'Cloud Concepts', 'Governance', 'Pricing & Support'],
    link: 'https://learn.microsoft.com/en-us/certifications/exams/az-900/',
  },
  {
    title: 'Microsoft Certified: AZ-104',
    description: 'Microsoft Azure Administrator certification, focused on managing Azure identities, storage, governance, compute, networking, and monitoring in cloud environments. ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  Certification ID: 996655492',
    image: 'https://myassetstorageportfolio.blob.core.windows.net/assetsblob/AZ-104.png',
    tech: ['Azure Admin', 'Networking', 'Compute', 'Storage', 'Monitoring', 'RBAC'],
    link: 'https://learn.microsoft.com/en-us/certifications/exams/az-104/',
  },
  {
  title: 'Coming Soon: HashiCorp: Terraform Associate',
  description: 'HashiCorp Terraform Associate certification, validating skills in Infrastructure as Code (IaC), Terraform CLI, modules, state management, cloud provisioning, and best practices for automation and collaboration. Certification ID: 996655492',
  image: 'https://th.bing.com/th/id/R.40c934e95067ba2660ba6c01253006a7?rik=mo%2fd8Rb17Ecy8A&pid=ImgRaw&r=0',
  tech: ['Terraform', 'Infrastructure as Code', 'Modules', 'State Management', 'Provisioning', 'Automation'],
  link: 'https://developer.hashicorp.com/terraform/tutorials/certification-003',
  },
];

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
        
        {/* Header */}
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50 
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">FS</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900 dark:text-white">Francesco Sessa</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Cloud Infrastructure & DevOps Engineer</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <nav className="hidden md:flex space-x-6">
                  <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
                  <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
                  <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
                  <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
                </nav>
                
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 transition-all duration-300"
                >
                  {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="relative inline-block mb-8">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1 animate-pulse">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D4E03AQHA1EbFVt_P7Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696165499718?e=1759363200&v=beta&t=1q0SM-8iW5oGbZl0rfiXn9PUuVdRZX_HKIXQf7snzcQ" 
                    alt="Francesco Sessa" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Francesco Sessa
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Passionate about Automation, Infrastructure & DevOps.
                Cyber security and reversing enthusiast. I love to understand deeply how stuff works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#projects" 
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  View My Work
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <User className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Who I Am</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    I'm a passionate DevOps Cloud Engineer with 1.5+ years of experience about 
                    automating app deployment. Let's ride together to prod! 🚀
                  </p>
                </div>
                
                <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <Briefcase className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">What I Do</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    I specialize in Azure Cloud, Kubernetes, and DevOps with a strong focus on CI/CD.
                    I partner with application teams to build and deploy scalable solutions.
                    When challenges arise, I excel at troubleshooting complex issues, identifying root causes, and delivering effective solutions. ⚡
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute inset-4 bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">1.5+</div>
                      <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
                      <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2 mt-4">4</div>
                      <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <div className="mb-4 flex justify-center text-blue-600">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{skill.name}</h3>
                  <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Experiences&Projects</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                      View Project <ExternalLink className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certification Section */}
        <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Certifications</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((certifications, index) => (
                <div 
                  key={index}
                  className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={certifications.image} 
                      alt={certifications.title}
                      className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{certifications.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{certifications.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {certifications.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={certifications.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      View Project <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-12 shadow-lg">
              <Award className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Download My Resume</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Get a detailed overview of my experience, skills, and achievements. 
                Available in PDF format for easy viewing and sharing.
              </p>
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
                <Download className="w-5 h-5 mr-3" />
                Download Resume
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Work Together</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Mail className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">place.holder@somemail.com - Available soon! </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Phone className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-300">+0 (000) 000-0000 - Available soon! </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/Lawliet955"
                    className="flex-1 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <Github className="w-8 h-8 text-gray-900 dark:text-white mx-auto mb-2" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">GitHub</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/francesco-sessa-43a02726b/" 
                    className="flex-1 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <Linkedin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">LinkedIn</span>
                  </a>
                </div>
              </div>
              
              <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Send a Message</h3>
                </div>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/50 dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-white/50 dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 bg-white/50 dark:bg-slate-700/50 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">FS</span>
              </div>
              <span className="text-white text-xl font-semibold">Francesco Sessa</span>
            </div>
            <p className="text-gray-400 mb-6">
              Built with ❤️ with React and Tailwind CSS.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/Lawliet955" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/francesco-sessa-43a02726b/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;