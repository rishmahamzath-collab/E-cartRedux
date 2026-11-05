import React from 'react'
import { Link } from 'react-router-dom'


function PageNotFound() {
  return (
     <div style={{height : "90vh"}} className='d-flex justify-content-center align-items-center flex-column'>
      <img className='w-25' src="https://www.innonet.nl/wp-content/uploads/2017/11/Page-not-found.png" alt="no image" />
      <h1 className='my-5'>WE ARE SORRY, LOOK LIKE YOU ARE LOST</h1>
      <Link to={'/'} className='btn btn-primary text-light'>Back to Home</Link>
    </div>
  )
}

export default PageNotFound
