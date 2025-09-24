/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

import {
  faGithub,
  faJsSquare,
  faLaravel,
  faPython,
  faReact,
  faSquareFigma
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const aboutArray = 'About Me'.split('')

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
            I am a Bachelor of Science in Information Technology graduate 
            from the University of San Carlos with a strong foundation in programming 
            and software development. During my academic journey, I gained hands-on 
            experience through projects such as developing a Fixed Asset Management 
            System for Virginia Foods, built with Laravel, Tailwind CSS, JavaScript, 
            PHP, and a Django API for predictive maintenance.

            {/* I’m a DevOps and Full Stack Engineer with over 2 years of
            experience, specializing in automating workflows, optimizing CI/CD
            pipelines, and deploying intelligent systems. My expertise spans
            across DevOps, full-stack, blockchain development, and aritificial
            intelligence, with a strong foundation in security. */}
          </p>
          <p>
            I enjoy working in collaborative environments where I can contribute my 
            skills in planning, coding, debugging, and testing to deliver efficient 
            and scalable software solutions. Passionate about continuous learning, 
            I am committed to growing as a software engineer while bringing innovative 
            solutions to real-world challenges.

            {/* I’m passionate about solving real-world problems through innovative
            technology and continuously learning to stay ahead of industry
            trends. Whether it's streamlining infrastructure or building
            scalable applications, I bring a holistic approach to every project. */}
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faGithub} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faLaravel} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faSquareFigma} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
