import React from 'react'
import courseCard from './pages/Home.jsx';
import Image from './assets/letslearn.jpg';

const CourseCard = () => {
  return (
    <div>
        <CourseCard 
            image={Image}
            title="Software Development Course in Nepal"
            Description="Learn full-stack software development with Java, C++, Python, .NET and other technologies."
            Duration="2.5 Months"
            Enrolled="120+ enrolled"
            Price="NRP. 18000 /-"
        />
        
    
    </div>
  )
}

export default CourseCard