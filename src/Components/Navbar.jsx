
import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import {  NavLink } from 'react-router-dom'


const Navbar = () => {

   
    const { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();

  return (
    <>
        <nav className="navbar navbar-expand-lg  bg-light shadow fixed-top p-1">
        <div className="container">
            {/* title */}
            <h3 className="navbar-text bg-dark text-white px-3 pb-2 mt-3 rounded-5">Mob-Shop</h3>
            {/* menu button */}
            <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span className="navbar-toggler-icon "></span>
            </button>

            {/* sidebar */}
            <div className="offcanvas offcanvas-start sidebar " id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header border-bottom text-white mt-3 px-5">
                <h2 className="offcanvas-title d-flex align-items-center" >Mob Shop</h2>
                <button type="button" className="btn-close btn-close-white shadow-none " data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body  d-flex flex-column flex-lg-row p-lg-2">
                <ul className="navbar-nav d-flex align-items-center  justify-content-center px-5  flex-grow-1 ">
                <li className="nav-item mx-3 text-center py-3 ">
                    <NavLink to='/' className="nav-link"><i className="fa-solid fa-house me-2" ></i>Home</NavLink>
                </li>
                <li className="nav-item mx-3 text-center py-3">
                    <NavLink to='/Shop' className="nav-link"><i className="fa-solid fa-bag-shopping me-2"></i>Shop</NavLink>
                </li>
                <li className="nav-item mx-3 text-center py-3 ">
                    <NavLink to='/Contact' className="nav-link"><i className="fa-solid fa-address-book me-2"></i>Contact</NavLink>
                </li>
                <li className="nav-item mx-3 text-center py-3 ">
                    <NavLink to='/Cart' className="nav-link"><i className="fa-solid fa-cart-shopping me-2"></i>Cart</NavLink>
                </li>
                </ul>

               <div className='m-auto'>
               {
                    isAuthenticated ?
                    <div className='d-flex  align-items-center'>
                        <h5 className='m-auto me-3 text-white'><i class="fa-solid fa-user me-2"></i>{user.name}</h5>
                                <button className='text-center btn btn-dark btn-sm' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>log out</button>

                    </div>
                         :
                    <button className='btn btn-dark rounded-5 px-3' onClick={() => loginWithRedirect()}>log in</button>   
                }
               </div>
               
            </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar