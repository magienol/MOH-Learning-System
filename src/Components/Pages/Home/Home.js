import React from 'react'
import "./Home.css"
import Hero from '../../Hero/Hero'
import Trusted from '../../Trusted/Trusted'
import Detail from '../../Detail/Detail'
import CourseList from '../../CourseList/CourseList'
import Info from "../../Info/Info"

const Home = () => {
  return (
    <div>
   <Hero />
   <Trusted />
   <Detail />
   <CourseList />
   <Info />
    </div>
  )
}

export default Home
