import { Route, Routes } from 'react-router-dom'
import './App.css'
import View from './Pages/View'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import PageNotFound from './Pages/PageNotFound'

import Footer from './Components/Footer'
import Products from './Pages/Products'

function App() {
  

  return (
    <>
    
     <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/products/:id' element={<View/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/*' element={<PageNotFound/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
