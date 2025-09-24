import { useEffect, useState } from 'react'

import Loader from 'react-loaders'

import WordCloud from './wordcloud'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const skillsArray = 'Skills'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <p>
            I have a strong foundation in software development, with a focus on building 
            responsive, secure, and user-friendly web applications. My experience includes 
            developing full-stack systems, integrating machine learning APIs, and creating 
            solutions with real-world impact such as asset management, reservations, and 
            academic platforms.
          </p>
          <p>
            My skill set spans across full-stack development, database design, and modern 
            frameworks including Laravel, ReactJS, Tailwind CSS, PHP, and MySQL. 
            I’m committed to continuous learning and driven to apply my knowledge in 
            solving practical problems through efficient and scalable software solutions.
          </p>
        </div>

        <div className="tagcloud-wrap">
          <WordCloud />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Skills
