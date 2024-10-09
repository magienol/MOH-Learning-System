import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CourseContext } from "../CourseContext/CourseContext"
import Course from "../Course/Course"
import "./CourseList.css"


const CourseList = () => {
  const { courses } = useContext(CourseContext);
  console.log(courses);
  return (
    <div>
      <div className="course_wrapper">
        <h2>In-Demand <span> Courses </span></h2>
        <div className='course_container'>
          {courses.map((course, index) => {
            return (
              <Link to={`/course/${course.id}`} key={index}> <Course course={course} />
                </Link>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default CourseList
