import React from 'react'
import Images from './Images'


const CourseCard = ({coursename,review,price,img}) => {
  return (
    <div className='card_item'>
        <div className='card_image'>
          <Images source={img} alt="Not_Found"/>
           
        </div>
        <div className='card_details'>
            <h5>All Courses</h5>
            <h3>{coursename}</h3>
            <span>Review: {review}</span>
            <h6>Price: {price}</h6>
            <div className="button"><a href="#">click for discount</a></div>
        
        </div>
    </div>
  )
}

export default CourseCard