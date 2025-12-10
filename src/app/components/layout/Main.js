import React from 'react'
import {Education,Experience,Skills,ProjectsCarousel} from '../../components';



const Main = () => {
  return (
    <div className='w-full md:mt-96 mt-[700px]'>
        <Education/>
        <Experience/>
        <Skills/>
        <ProjectsCarousel/>
    </div>
  )
}

export default Main