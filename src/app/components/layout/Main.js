import React from 'react'
import {Education,Skills,ProjectsCarousel,WorkExperience} from '../../components';

const Main = () => {
  return (
    <div lazy="true" className='w-full md:mt-96 mt-[700px] '>
        <Education/>
        <WorkExperience/>
        <Skills/>
        <ProjectsCarousel/>
    </div>
  )
}

export default Main