import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {getAllProducts} from '../redux/slices/productSlice';
import Header from '../Components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons';
import { faBackward } from '@fortawesome/free-solid-svg-icons';


function Products() {

  const {loading,allProducts,error} =useSelector(state => state.productReducer)

  const dispatch = useDispatch()
  // pagination simple logic


  const [currentPage,setcurrentPage] = useState(1)
  const productPerPage = 8
  const totalPages = Math.ceil(allProducts?.length/productPerPage)
  const currentPageLastindex = currentPage * productPerPage
  const currentPageFirstindex = currentPageLastindex - productPerPage
  const visibleProductArray = allProducts?.slice(currentPageFirstindex,currentPageLastindex)


  const navigateNextPage = ()=>{
    currentPage != totalPages && setcurrentPage(currentPage+1)
  }
  const navigatePrevPage = ()=>{
    currentPage != 1  && setcurrentPage(currentPage-1)
  }



useEffect(()=>{
  dispatch(getAllProducts())
},[])


  return (
    <>
    <Header insideProduct/>
    <div className='m-5'>
     {
      loading ?
      <div className='text-center my-5 fw-bolder'>Loading...</div>
      :
              <div className="row pt-5">
            {/* Duplicate column according to products */}
          {
            allProducts.length>0?
            visibleProductArray.map(product=>(
                <div key={product?.id} className="col-3">
             {/* Cards */}
        <Card className='shadow p-2'>
      <Card.Img style={{height:"250px"}} variant="top" src={product?.thumbnail} />
      <Card.Body className='text-center' >
        <Card.Title>{product?.title}</Card.Title>
        <Link to={`/products/${product?.id}`} className='btn btn-primary'>View More</Link>
       
        
      </Card.Body>
    </Card>
            </div>
            ))
            
          
            :
            <div className='fw-bolder'>No products found</div>
          }
           
        </div>
     }
     <div className='text-center my-5 '>
       <button onClick={navigatePrevPage} className='btn'><FontAwesomeIcon icon={faBackward} /></button>
      {currentPage} of {totalPages}
      <button onClick={navigateNextPage} className='btn'><FontAwesomeIcon icon={faForward} /></button>
     
      

     </div>
    
    </div>
    </>
  )
}

export default Products
