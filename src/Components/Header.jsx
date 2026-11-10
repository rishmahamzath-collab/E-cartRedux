import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaFontAwesome, FaTruckFast } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeart, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../redux/slices/productSlice';

function Header({insideProduct}) {
  const userwishlist = useSelector(state=>state.WishlistReducer)
  const dispatch = useDispatch()

  return (
     <Navbar expand="lg" className="bg-primary fixed-top">
      <Container>
        <Navbar.Brand><Link to={"/"} className="text-light text-decoration-none fw-bold"><FontAwesomeIcon icon={faTruckFast} />E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           {insideProduct && <Nav.Item>
              <input onChange={e=>dispatch(searchProduct(e.target.value))} type="text" className='form control' placeholder='Search your products' />
            </Nav.Item>}
            <Link to={'/wishlist'} className='text-light text-decoration-none fw-bold ms-5'> <FontAwesomeIcon icon={faHeart}   className='fw-bold fs-4 text-danger' />Wishlist    <Badge bg="secondary">{userwishlist?.length}</Badge></Link>
            <Link to={'/cart'} className='text-light text-decoration-none fw-bold ms-5'> <FontAwesomeIcon icon = {faCartPlus} className='fw-bold fs-4 text-success' />   Cart <Badge bg="secondary">10</Badge></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
