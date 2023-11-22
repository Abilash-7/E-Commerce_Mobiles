import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Shop from './Shop'
import Cart from './Cart'

const Router = ({mobiles,setMobiles,view,details,cart,setCart,addtoCart}) => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Shop' element={<Shop mobiles={mobiles} addtoCart={addtoCart} setMobiles={setMobiles}view={view} details={details}/>}></Route>

            <Route path='/Contact' element={<Contact/>}></Route>
            <Route path='/Cart' element={<Cart  cart={cart} setCart={setCart}/>}></Route>
        </Routes>
    </>
  )
}

export default Router