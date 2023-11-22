import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Cart = ({cart,setCart}) => {
    const nav = useNavigate();

    const incQty = (product) => 
    {
        const exist = cart.find((x) =>
         {
            return x.id === product.id
        })

        setCart(cart.map((curElm) => {
            return curElm.id === product.id ? {...exist, qty: exist.qty + 1} : curElm
        }))
    }

    const decQty = (product) => 
    {
        const exist = cart.find((x) =>
         {
            return x.id === product.id
        })

        setCart(cart.map((curElm) => {
            return curElm.id === product.id ? {...exist, qty: exist.qty - 1} : curElm
        }))
    }

    const remove = (product) => {
        const exist = cart.find((x) => {
            return x.id === product.id
        })
        if(exist.qty > 0)
        {
            alert('Item removed')
            setCart(cart.filter((p) => {
                return p.id !== product.id
            }))
        }
    }

    // // total
    const total = cart.reduce((Price,item) => Price + item.qty * item.price,0)

  return (
    <>
        <div className="container-fluid mt-5 pt-5">
            <div className="border-bottom back">
                        <Link to={'/Shop'} className='link'><h3 className='py-3'><i className="fa-solid fa-arrow-left me-3"></i>Continue Shopping</h3></Link>
            </div>
            {
                cart.length === 0 ?
                <div className="emptyCart d-flex flex-column justify-content-center align-items-center vh-100">
                    <h2 className='empty'>Cart is Empty</h2>
                </div>
                :
                <div className="content row">
                    <div className="col-lg-8 items bg-light">
                        <h4 className='text-center  pt-4'>Your Cart</h4>
                        <div className="d-flex flex-wrap justify-content-center my-3">
                            {
                                  cart.map((p) => 
                                  {
                                      return(
                                          <div className="cart_item row bg-white w-100 m-2 rounded-3 shadow">
                                              <div className="img_box col-4 p-3 justify-content-center d-flex">
                                                  <img src={p.img} alt={p.Title} width={100} />
                                              </div>
                                              <div className="detail col-8 p-3">
                                                  <h5 className='mb-3'>{p.title} <strong className='ms-5'> &#8377;{p.price}</strong></h5>
                                                  <div className="qty">
                                                      <button className='dec btn-sm btn-dark btn' onClick={()=> decQty(p)}>-</button>
                                                      <input type="text" style={{width:'32px'}} className='text-center' value={p.qty} />
                                                      
                                                      <button className='inc btn-sm btn btn-dark' onClick={()=> incQty(p)}>+</button>
                                    
                                                      <h4 className='mt-3 w-100 '>Total : &#8377; {p.price * p.qty}<button onClick={() => remove(p)} className='btn btn-sm btn-dark me-5' style={{float:'right'}}>Remove</button></h4>          
                                                  </div>
                                              </div>
                                          </div>
                                      )
                                  })
                            }
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h4 className='text-center pt-4'>Total</h4>
                        <div className="total">
                            {
                                cart.length > 0 &&
                                <>
                                    <div className='px-5 text-center mt-5'>
                                        <div className='d-flex justify-content-between '>
                                            <h4>Total items : </h4>
                                            <h4>{cart.length }</h4>
                                        </div>
                                        <div className='d-flex justify-content-between '>
                                            <h4>Delivery Charges : </h4>
                                            <h4 className='text-success'>FREE </h4>
                                        </div>
                                        <div className=' mt-5 d-flex justify-content-between '>
                                            <h4>Total Amount : </h4>
                                            <h4>&#8377;{total}</h4>
                                        </div>
                                        <button className='btn btn-success mt-5' onClick={() => {alert("order succesfully."); nav('/')}}>Check Out</button>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            }
        </div>

    </>
  )
}

export default Cart