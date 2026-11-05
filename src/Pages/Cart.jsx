import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Cart() {
  return (
    <div style={{height:"80vh"}} className='container my-5'>
       <h1 className='pt-5 text-primary fw-bold'>User's Cart</h1>
      <div className='row'>
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
              <tr>
                <td>1</td>
                <td>Perfume with long lasting </td>
                <td> <img width={"50px"} height={"50px"} src="https://denverformen.com/cdn/shop/files/Hamilton_110ml_1.jpg?v=1758608381" alt="" /></td>
                <td>
                  <div className='d-flex'>
                    <button className='btn fs-4'>-</button>
                    <input style={{width:"50px"}} type="text" className='form-control' readOnly />
                       <button className='btn fs-4'>+</button>


                  </div>
                </td>
                <td>$30</td>
                <td className='btn text-danger'><FontAwesomeIcon icon={faXmark} /></td>
              </tr>
            </tbody>
          </table>

       
        <div className='float-end'>
          <button className='btn btn-danger me-3'>EMPTY CART</button>
          <Link to={"/"} className='btn btn-info text-light'>SHOP MORE</Link>
        </div>
      </div>
      <div className='col-lg-4'>
        <div className='border shadow p-5 rounded text-center'>
          <h3>total amount : <span className='text-danger'>$300</span></h3>
           <hr />
        <button className='btn btn-success w-75'>CHECKOUT</button>
       </div>
      </div>

      </div>
    </div>
  )
}

export default Cart
