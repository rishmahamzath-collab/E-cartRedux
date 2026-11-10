import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons/faHeartCircleXmark';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Header from '../Components/Header'
import { useSelector } from 'react-redux';

function Wishlist() {
  const userwishlist = useSelector(state => state.WishlistReducer)
  return (

    <>
      <Header />
      <div className='container my-5'>
       {
        userwishlist?.length>0?
        <>
 <h1 className='pt-5 text-primary fw-bold'>User's Wishlist</h1>
        <div className="row pt-5">
          {/* Duplicate column according to products */}
          {
            userwishlist.map(item=>(
  <div className="col-lg-3">
            {/* Cards */}
            <Card className='shadow p-2'>
              <Card.Img style={{ height: "250px" }} variant="top" src={item?.thumbnail} />
              <Card.Body className='text-center' >
                <Card.Title>{item?.title}</Card.Title>
                <div className='d-flex justify-content-evenly '>
                  <button className='btn text-danger fw-bold fs-3'><FontAwesomeIcon icon={faHeartCircleXmark} /></button>
                  <button className='btn text-success fw-bold fs-3'><FontAwesomeIcon icon={faCartPlus} /></button>
                </div>
              </Card.Body>
            </Card>
          </div>
            ))
          
}
        </div>
        </>
        :
        <div className='d-flex justify-content-center align-items-center flex-column'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOjTWlD53pEZU8XT4Ii_k0cZaeBsFNWU9qlE2AgMYqkg&s=10" alt="no image" />
          <h2>Your Wishlist is empty</h2>
          <Link to={'/'} className='btn btn-primary'>Add More</Link>

        </div>
       }
      </div>
    </>
  )
}

export default Wishlist
