import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons/faHeartCircleXmark';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';


function Wishlist() {
  return (
    <div className='container my-5'>
      <h1 className='pt-5 text-primary fw-bold'>User's Wishlist</h1>
      <div className="row pt-5">
        {/* Duplicate column according to products */}
        <div className="col-lg-3">
          {/* Cards */}
          <Card className='shadow p-2'>
            <Card.Img style={{ height: "250px" }} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlo4-8c95RWJkRPQ_ZFNIB5ywYmLqj4llHyiF_Au8SVQ&s=10" />
            <Card.Body className='text-center' >
              <Card.Title>Perfume</Card.Title>
              <div className='d-flex justify-content-evenly '>
                <button className='btn text-danger fw-bold fs-3'><FontAwesomeIcon icon={faHeartCircleXmark} /></button>
                <button className='btn text-success fw-bold fs-3'><FontAwesomeIcon icon={faCartPlus} /></button>

              </div>


            </Card.Body>
          </Card>
        </div>

      </div>

    </div>
  )
}

export default Wishlist
