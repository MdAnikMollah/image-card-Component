import { useState } from 'react'
import CourseCard from './components/CourseCard'
import CourseImg from './assets/images/mern.jpg'
import CourseImg1 from './assets/images/web design.jpg'
import CourseImg2 from './assets/images/graphics.jpg'


let dummycourse = [
 
  {
    id:1,
    coursename:"MERN Stack Development",
    price:80000,
    review:9000,
    img:CourseImg,
    
  },
  {
    id:2,
    coursename:"Front-end Development",
    price:40000,
    review:3000,
    img:CourseImg1,
   
  },
  {
    id:3,
    coursename:"Graphics Designer",
    price:30000,
    review:1000,
    img:CourseImg2,
   
  },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div className="course_wrapper">
      {dummycourse.map((item)=>
      <CourseCard img={item.img} coursename={item.coursename} price={item.price} review={item.review} />
      
      )}
      

    </div>
    </>
  )
}

export default App
