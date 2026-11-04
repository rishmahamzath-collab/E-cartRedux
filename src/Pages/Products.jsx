import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Products() {
  return (
    <div className='m-5'>
        <div className="row pt-5">
            {/* Duplicate column according to products */}
            <div className="col-3">
             {/* Cards */}
        <Card className='shadow p-2'>
      <Card.Img style={{height:"250px"}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlo4-8c95RWJkRPQ_ZFNIB5ywYmLqj4llHyiF_Au8SVQ&s=10" />
      <Card.Body className='text-center' >
        <Card.Title>Perfume</Card.Title>
        <Link to={'/products/:id'} className='btn btn-primary'>View More</Link>
       
        
      </Card.Body>
    </Card>
            </div>
           
        </div>
    
    </div>
  )
}

export default Products
