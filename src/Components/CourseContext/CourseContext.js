import React, { createContext, useState } from 'react';
import './CourseContext.css';
import { coursesData } from '../../data';

export const CourseContext = createContext();

const CourseContextProvider = ({ children }) => {
  const [courses, setCourses] = useState(coursesData);

  return (
    <CourseContext.Provider value={{ courses, setCourses }}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseContextProvider;
