import React from 'react'
import './style.css'
import EduCard from './EduCard'

const Education = () => {
    const exp = [
        {
            title: 'KSUSTA',
            durations: '2015-2020',
            honor: 'B.Sc Physics',
            role: 'Second Class - Upper Honors'
        },
        {
            title: 'Kaduna Integrated Academy',
            durations: '2022-present',
            honor: 'Instructor',
            role: 'Responsible for guiding pupils in ICT'
        },
        {
            title: 'Kaduna Polytechnic',
            durations: '2020-2021',
            honor: 'NYSC',
            role: 'Lab Assistant - Department of Applied Physics'
        },
        {
            title: 'Khemsafe',
            durations: '2016-2017',
            honor: 'SIWES',
            role: 'Software and Hardware Engineer'
        },
        {
            title: 'S. Y. Global Technology',
            durations: '2017-2018',
            honor: 'Internship',
            role: 'Software and Hardware Engineer'
        },
        
    ]
  return (
    <div className='edu-container'>
    <h1>Education & Experience</h1>
    <div className='edu'>
        {
            exp.map(e => <EduCard 
                key={e.title}
                title={e.title} 
                durations={e.durations} 
                honor={e.honor}
                role={e.role}/>
                )
        }
    </div>
    </div>
  )
}

export default Education