import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="footer grey mt-5 pt-3">
        <div className="container-fluid row  p-5 ">
            <div className="about col-lg-6 col-12 align-items-center d-flex flex-column">
                <h1 className='rounded-5 px-5 pb-2 shadow bg-dark text-white'>Mob-Shop</h1>
                <div className="detail">
                    <p className='text-center'>We are a team of design and develop that create high quality products.</p>
                    <div className='icons d-flex justify-content-center text-white gap-4'>
                        <div className='rounded-5 px-2 bg-dark fs-3 '>
                        <i className="fa-brands fa-facebook-f px-1 shadow"></i>
                        </div>
                        <div className='bg-dark rounded-5 px-2 fs-4'>
                        <i className="fa-brands fa-x-twitter  pt-2"></i>
                        </div>
                        <div className='bg-dark rounded-5 px-2 fs-4 '>
                        <i className="fa-brands fa-youtube pt-2"></i>
                        </div>
                        <div className='bg-dark rounded-5 fs-3 px-2 '>
                        <i className="fa-brands fa-instagram"></i>
                        </div>
                        </div>
                </div>
            </div>

            
            <div className="account col-lg-3 col-6 d-flex flex-column  justify-content-center">
                <h3>My Account</h3>
                <ul>
                    <li>Account</li>
                    <li>Order</li>
                    <li>Cart</li>
                    <li>Shipping</li>
                    <li>Return</li>

                </ul>
            </div>


            <div className="page col-lg-3 col-6 d-flex flex-column justify-content-center">
                <h3 style={{marginTop:'-22px'}}>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Trems & Conditions</li>

                </ul>
            </div>

            </div>
        </div>
        <div className="copyright bg-dark text-center text-white p-2">
                <small>&copy; 2023 Mob Shop.  All Rights Reserved</small>
        </div>
        
    </>
  )
}

export default Footer