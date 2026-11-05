import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function View() {
  return (
    <div className='container my-5 pt-5 '>
      <div style={{height:"80vh"}} className='row align-items-center'>
        <div className='col-lg-6 text-center'>
           <img className='img-fluid w-50' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlYioCugH6JphB6CEzAGQLf1su_5DJNTtIDZxshOMpPA&s=10" alt="products" />
           <div className='d-flex justify-content-evenly mt-5'>
            <button className='btn btn-info'>ADD TO WISHLIST</button>
            <button className='btn btn-success'>ADD TO CART</button>

           </div>
        </div>
        <div className='col-lg-6'>
          <h3 className='fw-bold'>title</h3>
          <h2 className='fw-bold'>$ 30</h2>
          <h4 className='fw-bold'>Brand</h4>
          <h4 className='fw-bold'>category</h4>
          <h4 className='fw-bold'>Discription</h4>
          <h5 className='fw-bold'>Client Reviews</h5>
          <div className='border rounded p-3 shadow my-5'>
            <p><span className='fw-bolder'>Name :</span>Message</p>
            <p>Rating : 5<FontAwesomeIcon icon={faStar} className='text-warning'/></p>

          </div>
      
        </div>
      </div>
    </div>
  )
}

export default View
