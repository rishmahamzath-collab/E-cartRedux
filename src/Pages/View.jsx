import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { addtowishList } from '../redux/slices/wishlistSlice'
import { addcart } from '../redux/slices/cartSlice'



function View() {

  const {id} = useParams()
  console.log(id);
  const {allProducts} = useSelector(state=>state.productReducer)
  const [product,setproduct] = useState({})
  const dispatch= useDispatch()
  const userwishlist = useSelector(state=>state.WishlistReducer)
  const usercart = useSelector(state=>state.CartReducer)

  console.log(userwishlist);
  
  useEffect(()=>{
    setproduct( allProducts?.find(item=>item.id==id))
  },[])

 // console.log(allProducts);
 const handlewishlist = () =>{
  //check the product already in the wishlist
  const existingitem =userwishlist?.find(item=>item?.id==product?.id)
  if(existingitem){
    Swal.fire({
      title:"sorry",
      text:"Product already in your wishlist",
      icon:"error",
      confirmButtonText:"ok"
    })
  }else{
    dispatch(addtowishList(product))
  }
 }



 const handleCart = ()=>{
  //check the product already in the cart
  const existingitem =usercart?.find(item=>item?.id == product?.id)
  dispatch(addcart(product))
  Swal.fire({
    title: "Success",
    text: existingitem? `${existingitem.title} quantity incremented` : "Product added in to your cart",
    icon: "success",
    confirmButtonText: "ok" 
  })
 }



  return (
    <>
    <Header/>
    <div className='container my-5 pt-5 '>
      <div  className='row align-items-center'>
        <div className='col-lg-6 text-center'>
           <img className='img-fluid w-50' src={product?.thumbnail} alt="products" />
           <div className='d-flex justify-content-evenly mt-5'>
            <button onClick={handlewishlist} className='btn btn-info'>ADD TO WISHLIST</button>
            <button onClick={handleCart} className='btn btn-success'>ADD TO CART</button>

           </div>
        </div>
        <div className='col-lg-6'>
          <h3 className='fw-bold'>{product?.title}</h3>
          <h2 className='fw-bold'>$ {product?.price}</h2>
          <h4 className='fw-bold'>Brand:{product?.brand}</h4>
          <h4 className='fw-bold'>category:{product?.category}</h4>
          <h4 className='fw-bold'>Description:{product?.description}</h4>
          <h5 className='fw-bold'>Client Reviews</h5>
         {
          product?.reviews?.map((item,index)=>(
             <div key={index} className='border rounded p-3 shadow my-5'>
            <p><span className='fw-bolder'>Name :{item?.reviewerName}</span>{item?.comment}</p>
            <p>Rating : {item?.rating}<FontAwesomeIcon icon={faStar} className='text-warning'/></p>

          </div>
          ))

         }
      
        </div>
      </div>
    </div>
    </>
  )
}

export default View
