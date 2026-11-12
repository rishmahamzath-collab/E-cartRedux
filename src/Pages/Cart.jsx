import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useNavigate } from 'react-router-dom'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCart, emptyCart, incrementCart, removeCartitem } from '../redux/slices/cartSlice'

import Swal from 'sweetalert2'
function Cart() {

  const usercart = useSelector (state=>state.CartReducer)
  const dispatch = useDispatch()
  const [cartTotal,setCartTotal] = useState(0)
  const navigate = useNavigate()


  useEffect(()=>{
    setCartTotal(usercart?.reduce((acc,curr)=>acc+curr.totalprice,0))
  },[usercart])
  const handleDecrementCart = (product) =>{
    if(product.quantity>1){
      dispatch(decrementCart(product.id))
    }else{
      dispatch(removeCartitem(product.id))
    }

  }

  const handleCheckout =() =>{
    dispatch(emptyCart())
    Swal.fire({
      title:"order placed successfully",
      text:"thank you for purcharsing with us",
      icon:"success",
      confirmationButton:"ok"

    })
    navigate('/')
  }

  return (
    <>
    <Header/>
    {
     usercart.length > 0 ?

      <div  className='container my-5 '>
       <h1 className='pt-5 text-primary fw-bold'>User's Cart</h1>
      <div className='row '>
        <div className='col-lg-8 border shadow'>
          <table className='table'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
             {
              usercart.map((item,index)=>( 
              <tr key={item?.id}>
                <td>{index+1}</td>
                <td>{item?.title} </td>
                <td> <img width={"50px"} height={"50px"} src={item?.thumbnail} alt="no image" /></td>
                <td>
                  <div className='d-flex'>
                    <button onClick={()=>handleDecrementCart(item)} className='btn fs-4'>-</button>
                    <input style={{width:"50px"}} value={item?.quantity} type="text" className='form-control' readOnly />
                       <button onClick={()=>dispatch(incrementCart(item?.id))} className='btn fs-4'>+</button>

                  </div>
                </td>
                <td>${item?.totalprice}</td>
                <td onClick={()=>dispatch(removeCartitem(item?.id))} className='btn text-danger'><FontAwesomeIcon icon={faXmark} /></td>
              </tr>
              ))
             }
            </tbody>
          </table>

       
        <div className='float-end py-3'>
          <button onClick={()=>dispatch(emptyCart())} className='btn btn-danger me-3'>EMPTY CART</button>
          <Link to={"/"} className='btn btn-info text-light '>SHOP MORE</Link>
        </div>
      </div>
      <div className='col-lg-4'>
        <div className='border shadow p-5 rounded text-center'>
          <h3>total amount : <span className='text-danger'>${cartTotal}</span></h3>
           <hr />
        <button onClick={handleCheckout} className='btn btn-success w-75'>CHECKOUT</button>
       </div>
      </div>
      </div>
    </div>
    :
    //empty cart
     <div className='d-flex justify-content-center align-items-center flex-column my-5'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOjTWlD53pEZU8XT4Ii_k0cZaeBsFNWU9qlE2AgMYqkg&s=10" alt="no image" />
              <h2>Your Cart is empty</h2>
              <Link to={'/'} className='btn btn-primary'>Add More</Link>
    
            </div>
            }
    </>
  )
}

export default Cart
