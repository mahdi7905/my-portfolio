import React from 'react'
import './style.css'
import ServiceCard from './ServiceCard'

const Services = () => {
    const data = [
        {
            title: 'Frontend Development',
            description: `I have over three years of experience with html,
            Css and JavaScript. 
            I also have rich experience with React, Tailwind and THREE.js.`
        },
        {
            title: 'Backend Development',
            description: `I have over two years of experience with django
            and nodeJS. My prefered backend technology is nodeJS
            because of its flexibility, performance and ecosystem.`
        },
        {
            title: '3D Design',
            description: `I have over seven years of experience with Blender. 
            I can create models, rig and create simple animations and simulations. A lot of times
             I create houses because of my basic understanding of architecture.`
        },
        {
            title: 'Electronics',
            description: `I also have huge fascination for electronics.
             I have knowledge of circuit components. I can design, build and analyse
            simple circuits and work with signal detectors.`
        },
    ]
  return (
    <div className='services-container'>
        <h1 className='services-header'>My Experirnce</h1>
        <div className="services">
            {
                data.map(datum => <ServiceCard 
                    key={datum.title} 
                    title={datum.title} 
                    description={datum.description}
                    />)
            }
        </div>
    </div>
  )
}

export default Services