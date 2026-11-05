import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";



function Footer() {
  return (
     <div style={{backgroundColor : 'black', height : "320px",}} className='container-fluid text-light p-5 bg-primary'>
      <div className='row '>
        <div className='col-lg-5'>
          <h3><FaTruckFast />DailyCart</h3>
          <p style={{textAlign : "justify", width:'380px'}} >Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
          <p>Code licensed Luminar, docs CC BY 3.0</p>
          <p>Currently v5.3.2.</p>
        </div>
      
        <div className='col-lg-2'>
          <h3>Links</h3>
          <p className='my-1' >Home</p>
          <p className='my-1'>Wishlist</p>
          <p className='my-1'>Cart</p>
          </div>

          <div className='col-lg-2 '>
            <h3>Guides</h3>
            <p className='my-1'>React</p>
            <p className='my-1'>React Bootstrap</p>
            <p className='my-1'>React Router</p>
          </div>

          <div className='col-lg-3  '>
            <h3>Contact Us</h3>
            <input className='me-1' type="text" placeholder='Email Here' />
           <FaArrowRightLong />
           <div >
            <FaFacebookF />
            <FaTwitter className='m-4' />
            <FaWhatsapp />
            <FaInstagram className='m-4' />
            <IoMdMail />
            <FaPhoneAlt className='m-4' />


           </div>
           
          </div>
      
</div>
         <p  className='text-center my-4  '><b>Copyright © August 2025 Batch, Daily Cart. Built with React Redux.</b></p>
      
    </div>
  )
}

export default Footer
