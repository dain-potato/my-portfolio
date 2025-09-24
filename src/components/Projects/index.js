import { useEffect, useState } from 'react'

import { faCode, faCodeBranch, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

import Project1 from '../../assets/images/project-1-sc-1.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

// Projects data - easily scalable for future additions
const projects = [
  {
    id: 1,
    title: 'Fixed Asset Management System',
    description: 'Developed a web-based Fixed Asset Management System with QR code scanning, predictive maintenance, real-time notifications, and secure reporting.',
    technologies: ['Laravel', 'PHP', 'JavaScript', 'RESTful API', 'Tailwind CSS', 'MySQL', 'Python (Django API)'],
    category: 'Fullstack Development',
    status: 'Completed',
    year: '2024',
    company: 'Virginia Foods, Inc.',
    features: [
      'QR code scanning for quick asset lookup and requests',
      'Real-time email notifications for requests and approvals',
      'Activity logs with auto-cleanup and export options',
      'Bulk CSV import/export for assets and maintenance data',
      'Custom reports with advanced filters and selectable fields',
      'Responsive UI with secure Laravel backend',
      'Predictive maintenance with machine learning (Flask API)',
    ],
    images: [], // Provision for multiple images
    githubUrl: 'https://github.com/dain-potato/FixedAssetManagementSystem.git', // Private project
    liveUrl: null, // Private project
    isPrivate: false
  },
  {
    id: 2,
    title: 'Reservo',
    description: 'Developed an online reservation and e-commerce platform for food businesses, featuring vendor pages, inventory management, and Google account login.',
    technologies: ['JavaScript', 'React', 'RESTful API', 'Node.js', 'Typescript', 'Tailwind CSS', 'Express.js', 'MySQL'],
    category: 'Frontend Development',
    status: 'Completed',
    year: '2023',
    company: 'Academic Project',
    features: [
      'Online reservations and e-commerce for food businesses',
      'Customizable vendor pages to showcase services',
      'Automated inventory and staff management system',
      'Reservation statistics and tracking dashboard',
      'Secure Google account login integration',
    ],
    images: [],
    githubUrl: 'https://github.com/EXEcuted-tech/reservo-web.git',
    liveUrl: null,
    isPrivate: false
  },
  {
    id: 3,
    title: 'Hogwarts Academic Module',
    description: 'Developed an academic management system with dynamic front-end rendering, secure role-based access, and full CRUD operations for academic records.',
    technologies: ['React', 'JavaScript', 'PHP', 'CSS', 'MySQL'],
    category: 'Web Application',
    status: 'Completed',
    year: '2021',
    company: 'Academic Project',
    features: [
      'Dynamic ReactJS front-end for user interaction',
      'CRUD operations for students, faculty, and admins',
      'PHP backend logic with validation and data handling',
      'MySQL database for secure academic record storage',
      'Authentication and role-based access control',
    ],
    images: [],
    githubUrl: 'https://github.com/dain-potato/Hogwarts-Academic-Module.git',
    liveUrl: null,
    isPrivate: false
  },
  {
    id: 4,
    title: 'Reserba',
    description: 'Developed a responsive restaurant reservation system with real-time booking, secure authentication, and efficient reservation management.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'AJAX', 'PHP', 'MySQL'],
    category: 'Web Application',
    status: 'Completed',
    year: '2022',
    company: 'Academic Project',
    features: [
      'Responsive web-based restaurant reservation system',
      'AJAX-powered asynchronous updates for smooth UX',
      'PHP backend handling reservations and time slots',
      'MySQL database for reliable record-keeping',
      'User authentication for secure account access',
    ],
    images: [],
    githubUrl: 'https://github.com/RiftNT/reserba.git',
    liveUrl: null,
    isPrivate: false
  },
  // {
  //   id: 5,
  //   title: '2D Data Visualization Tool',
  //   description: 'Developed a Python-based 2D plotting tool backed by Flask API for enhanced data visualization and improved decision-making clarity.',
  //   technologies: ['Python', 'Flask', 'Data Visualization', 'API Development', 'Charts'],
  //   category: 'Data Visualization',
  //   status: 'Completed',
  //   year: '2023',
  //   company: 'DRDO',
  //   features: [
  //     'Interactive 2D plotting',
  //     'Flask API backend',
  //     'Real-time data processing',
  //     'Decision-making insights'
  //   ],
  //   images: [],
  //   githubUrl: null,
  //   liveUrl: null,
  //   isPrivate: true
  // },
  // {
  //   id: 6,
  //   title: 'IPFS Trading Platform Engine',
  //   description: 'Redesigned trading platform core engine with IPFS Merkle DAG and pub-sub system, reducing transaction times by 70%.',
  //   technologies: ['Node.js', 'Express.js', 'IPFS', 'Merkle DAG', 'Blockchain', 'Pub-Sub'],
  //   category: 'Blockchain Development',
  //   status: 'Completed',
  //   year: '2023',
  //   company: 'Verified Network',
  //   features: [
  //     '70% reduction in transaction times',
  //     'IPFS Merkle DAG implementation',
  //     'Pub-sub messaging system',
  //     'Enhanced marketplace efficiency'
  //   ],
  //   images: [],
  //   githubUrl: null,
  //   liveUrl: null,
  //   isPrivate: true
  // },
  // {
  //   id: 7,
  //   title: 'Automated CI/CD Pipeline',
  //   description: 'Engineered comprehensive CI/CD pipeline using GitHub Actions and AWS CodeDeploy for fully automated deployments.',
  //   technologies: ['GitHub Actions', 'AWS CodeDeploy', 'DevOps', 'Automation', 'Cloud'],
  //   category: 'DevOps',
  //   status: 'Completed',
  //   year: '2023',
  //   company: 'Verified Network',
  //   features: [
  //     'Fully automated deployments',
  //     'GitHub Actions integration',
  //     'AWS CodeDeploy implementation',
  //     'Accelerated release cycles'
  //   ],
  //   images: [],
  //   githubUrl: null,
  //   liveUrl: null,
  //   isPrivate: true
  // },
  // {
  //   id: 8,
  //   title: 'Social Media Platform',
  //   description: 'Developed a scalable social media platform with WebSocket-based voice/video calling, serving 10,000+ active users.',
  //   technologies: ['Node.js', 'Express.js', 'Next.js', 'MongoDB', 'WebSocket', 'WebRTC'],
  //   category: 'Full Stack Development',
  //   status: 'Completed',
  //   year: '2022',
  //   company: 'Metarootz',
  //   features: [
  //     '10,000+ active users',
  //     'WebSocket voice/video calling',
  //     'Scalable architecture',
  //     'Real-time communication'
  //   ],
  //   images: [],
  //   githubUrl: null,
  //   liveUrl: null,
  //   isPrivate: true
  // }
]

const Projects = () => {
  const projectsArray = 'Projects'.split('')
  const [letterClass, setLetterClass] = useState('text-animate')
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  // Get unique categories for filtering
  const categories = ['All', ...new Set(projects.map(project => project.category))]

  // Filter projects based on selected category
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={projectsArray}
              idx={15}
            />
          </h1>
          <p>
            Showcasing my academic projects across web development and software 
            engineering, highlighting practical solutions to real-world problems.
          </p>
          
          {/* Category Filter */}
          <div className="filter-container">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-container">
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="project-card" style={{animationDelay: `${index * 0.1}s`}}>
                {/* Project Images Section - with provision for multiple images */}
                {project.images && project.images.length > 0 && (
                  <div className="project-images">
                    <div className="image-carousel">
                      {project.images.map((image, idx) => (
                        <img key={idx} src={image} alt={`${project.title} ${idx + 1}`} />
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="project-content">
                  <div className="project-header">
                    <div className="project-meta">
                      <span className="category">{project.category}</span>
                      <span className="year">{project.year}</span>
                      <span className={`status ${project.status.toLowerCase()}`}>
                        {project.status}
                      </span>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="company">{project.company}</p>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link">
                        <FontAwesomeIcon icon={faCodeBranch} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.isPrivate && (
                      <span className="private-indicator">
                        <FontAwesomeIcon icon={faCode} />
                        <span>Private Project</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
