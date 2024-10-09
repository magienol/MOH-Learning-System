import React from 'react'
import "./CourseDetail.css"
import { coursesData } from '../../../data'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

  const { id } = useParams();
  const course = coursesData.find(course => {
    return course.id === parseInt(id);
  })

  return (
    <div>
      <div className="course_details">
        <div className="details_top">
          <div className="details_left">
            <h2 className="name">{course.name}</h2>
            <p className="desc">{course.courseDetail.description}</p>
            <p className="lang">{course.courseDetail.language}</p>
            <p className="date">{course.courseDetail.date}</p>
            <div className="price_container">
              <h3 className="price">price: ${course.price}</h3>
              <button>Buy the Course</button>
              </div>
            </div>
            <div className="details_right">
              <img src={course.image} alt="course_img" className="course_img" />
            </div>
          </div>
          <div className="c y">
            <h2>Curriculum</h2>
            <fieldset className="field_container">
              <legend className="phase">Phase 01 </legend>
                <h3 className="p_name">{course.phase1.phaseName}</h3>
                <ul>
                  <li>{course.phase1.phaseList}</li>
                  <li>{course.phase1.phaseList1}</li>
                  <li>{course.phase1.phaseList2}</li>
                  <li>{course.phase1.phaseList3}</li>
                  <li>{course.phase1.phaseList4}</li>
                </ul>
            </fieldset>

            <fieldset className="field_container">
              <legend className="phase">Phase 02 </legend>
                <h3 className="p_name">{course.phase2.phaseName}</h3>
                <ul>
                  <li>{course.phase2.phaseList}</li>
                  <li>{course.phase2.phaseList1}</li>
                  <li>{course.phase2.phaseList2}</li>
                  <li>{course.phase2.phaseList3}</li>
                  <li>{course.phase2.phaseList4}</li>
                </ul>
            </fieldset>
            <fieldset className="field_container">
              <legend className="phase">Phase 03 </legend>
                <h3 className="p_name">{course.phase3.phaseName}</h3>
                <ul>
                  <li>{course.phase3.phaseList}</li>
                  <li>{course.phase3.phaseList1}</li>
                  <li>{course.phase3.phaseList2}</li>
                  <li>{course.phase3.phaseList3}</li>
                  <li>{course.phase3.phaseList4}</li>
                </ul>
            </fieldset>

            <fieldset className="field_container">
              <legend className="phase">Phase 04 </legend>
                <h3 className="p_name">{course.phase4.phaseName}</h3>
                <ul>
                  <li>{course.phase4.phaseList}</li>
                  <li>{course.phase4.phaseList1}</li>
                  <li>{course.phase4.phaseList2}</li>
                  <li>{course.phase4.phaseList3}</li>
                  <li>{course.phase4.phaseList4}</li>
                </ul>
            </fieldset>

          </div>
        </div>
      </div>
   
  )
}

export default CourseDetail
