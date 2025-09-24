import React, { useEffect, useState } from 'react'

import TagCloud from 'TagCloud'

const WordCloud = () => {
  const [isLoading, setLoad] = useState(true)

  const container = '.content'
  const texts = [
    'Python',
    'Typescript',
    'MySQL',
    'Restful API',
    'React',
    'NodeJS',
    'Express',
    'Laravel',
    'PHP',
    'Tailwind CSS',
    'Git',
    'GitHub',
    'HTML5',
    'CSS3',
    'JS',
    'C',
    'Figma',
    // 'SQL',
    // 'Golang',
    // 'C++',
    // 'Bash',
    // 'NextJS',
    // 'Firebase',
    // 'Django',
    // 'Flask',
    // 'GraphQL',
    // 'FastAPI',
    // 'PostgreSQL',
    // 'MongoDB',
    // 'Redis',
    // 'TensorFlow',
    // 'Keras',
    // 'PyTorch',
    // 'Scikit-learn',
    // 'OpenCV',
    // 'Docker',
    // 'Kubernetes',
    // 'GCP',
    // 'AWS',
    // 'Terraform',
    // 'Linux',
    // 'Java',
    // 'Flutter',
    // 'Dart',
    // 'Solidity',
  ]
  const options = {
    radius: 300,
    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',
    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,
    // interact with cursor move on mouse out
    keep: true,
  }
  //   to render wordcloud each time the page is reloaded
  useEffect(() => {
    if (isLoading) {
      TagCloud(container, texts, options)
      setLoad(false)
    }
  })

  return (
    <div className="main">
      <span className="content"></span>
    </div>
  )
}

export default WordCloud
