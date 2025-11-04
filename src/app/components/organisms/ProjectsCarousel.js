import React from 'react'
import {Heading} from '@/app/components/atoms/typography/index'
import CarouselProjects from '@/app/components/organisms/projectCarousel/CarouselProjects'

const ProjectsCarousel = () => {
  return (
    <div>
        <Heading heading='Projects'/>
        <CarouselProjects/>
    </div>
  )
}

export default ProjectsCarousel