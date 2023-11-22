import React, { useState } from 'react'
import BudgetMobiles from './BudgetMobiles'
import { useNavigate } from 'react-router-dom';



const Home = () => {

    const nav = useNavigate();
    const [budget] = useState(BudgetMobiles); 

  return (
    <>
    <main className='home mt-5 pt-5'>
    <div className="offer w-100 bg-primary text-center text-white p-3">
        <strong>DIWALE OFFER <span className="badge bg-danger mx-2 px-3">10% </span>Discount </strong>
      </div>
        <section>
                <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true" aria-label="First slide"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img src="/images/carousel1.jpg" className="w-100 vh-100" alt="First slide"/>
                            <div className="carousel-caption top-0 mt-5 pt-5 text-black ">
                                <h1 className='fs-1'>HUAWEI P60 Pro</h1>
                                <p className='fs-4'>Vision Enlightened</p>
                                <button className='btn btn-dark px-5 py-3 rounded-4' onClick={()=>nav('/Shop')}>Buy Now</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/carousel2.jpg" className="w-100  vh-100" alt="Second slide"/>
                            <div className="carousel-caption top-0  mt-5 pt-5">
                                <p className='fs-5'>iPhone 15 Pro</p>
                                <h1 style={{fontSize:'3em'}}>Titanium</h1>
                                <p className='fs-5'>From  &#8377; 21483.00/mo. or  &#8377; 134900.00*</p>
                                <button className=' mt-3 btn btn-primary px-3 py-1 fs-5 rounded-4' onClick={()=>nav('/Shop')}>Buy </button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/carousel3.jpg" className="w-100  vh-100  " alt="Third slide"/>
                            <div className="carousel-caption top-0 text-black mt-5 w-50" >
                                <h1 className='fs-1'>Grap Flipsuit case at no cost with Galaxy Z Flip5</h1>
                                <p className='fs-4'>Starting  &#8377; 80999*</p>
                                <button className='btn btn-light  px-4 py-2 rounded-5 ' style={{fontWeight:'700'}} onClick={()=>nav('/Shop')}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
        </section>    

        {/* bank offer */}
        <section className='offers container-fluid w-100 flex-column text-center my-5 p-5 '>
            <h1 className='display-4'>FESTIVAL OFFERS OVERVIEW</h1>
            <div className='d-flex box flex-wrap justify-content-center align-items-center mt-3 '>
                <div className='py-3 px-5 d-flex align-items-center shadow '>
                    <img src="/images/bank/icici.jpg" alt="icici" />
                    <h5 className='ms-5'>Upto *3,500 Instant Discount</h5>
                </div>
                <div className='py-3 px-5 d-flex align-items-center shadow'>
                    <img src="/images/bank/axis.jpg" alt="icici" />
                    <h5  className='ms-5'>Upto *7,500 Instant Discount</h5>
                </div>
                <div className='py-3 px-5 d-flex align-items-center shadow'>
                    <img src="/images/bank/hdfc.jpg" alt="icici"  />
                    <h5  className='ms-5'>Upto *1,500 Instant Discount</h5>
                </div>
                <div className='py-3 px-5 d-flex align-items-center shadow'>
                    <img src="/images/bank/sbi.jpg" alt="icici" />
                    <h5  className='ms-5'>Upto *2,000 Instant Discount</h5>
                </div>
            </div>
        </section>

        {/* top three brand */}
        <section className='top-3 container-fluid pb-5'>
            <h1 className='text-center p-5'>BEST BRANDS LEADERBOARD</h1>
                <div class="brand d-flex flex-wrap align-items-center gap-5 justify-content-center">
                  <div className="box rounded-5 shadow bg-white cursor">
                    <div className="text-center">
                        <h1 className='p-3 border-bottom'>1</h1>
                        <img src="images/banner/apple.png" alt="iphone" className='img-fluid shadow' />
                        <h5 className='p-4'>iPhone 15 Pro</h5>
                    </div>
                  </div>
                  <div className="box rounded-5 shadow bg-white cursor">
                    <div className=" text-center">
                        <h1 className='p-3 border-bottom'>2</h1>
                        <img src="images/banner/samsung.png" alt="samsung" className='img-fluid shadow  p-3' />
                        <h5 className='p-4'>Samsung Galaxy S23 Ultra</h5>
                    </div>
                  </div><div className="box rounded-5 shadow bg-white cursor">
                    <div className="text-center">
                        <h1 className='p-3 border-bottom'>3</h1>
                        <img src="images/banner/pixel.png" alt="google" className='img-fluid shadow ' />
                        <h5 className='p-4'>Google Pixel 8 Pro</h5>
                    </div>
                  </div>
                </div>
        </section>
        {/* brands */}
        <section className='container-fluid w-100 brands p-5' style={{backgroundColor:"#eee"}}>
            <h2 className='text-center '>Which Brands Is Best For You?</h2>
            <div className='d-flex flex-wrap justify-content-center align-items-center gap-5 my-5'>
                <div className='box cursor text-center'>
                    <img src="/images/brands/realme.jpg" alt="realme" width={80} />
                    <h5 className='py-3'>Realme</h5>
                </div>
                <div className='box cursor  text-center'>
                    <img src="/images/brands/huawei.jpg" alt="huawei" width={80} height={80}/>
                    <h5 className='py-3'>Huawei</h5>
                </div>
                <div className='box cursor  text-center'>
                    <img src="/images/brands/apple.jpg" alt="apple" width={80} height={80}/>
                    <h5 className='py-3'>Apple</h5>
                </div>
                <div className='box cursor text-center'>
                    <img src="/images/brands/samsung.jpg" alt="samsung" width={80} height={80} />
                    <h5 className='py-3'>Samsung</h5>
                </div>
                <div className='box cursor text-center'>
                    <img src="/images/brands/google.jpg" alt="pixel" width={80} height={80}/>
                    <h5 className='py-3'>Pixel</h5>
                </div>
                <div className='box cursor  text-center'>
                    <img src="/images/brands/mi.jpg" alt="mi" width={80} />
                    <h5 className='py-3'>Mi</h5>
                </div>
            </div>
        </section>
        
        {/* banner */}
        <section className='banners'>
            <h1 className='text-center my-5'>MOST  FAVORITE</h1>
            <div className='banner m-5'>
                <div className="row">
                    <div className="col-6">
                        <img src="/images/banner/realme narzo60.png" alt="realme" className='img-fluid rounded-4 shadow'/>
                    </div>
                    <div className="col-6 mt-5 pt-5 d-flex flex-column align-items-center justify-content-center">
                        <h1 className='display-2'>realme narzo 60 Pro</h1>
                        <p className=''>realme Best Budget 5G Phone</p>
                        
                        <h2 className=''>From *19,999  |  8GB + 128GB</h2>
                        <button className='btn btn-dark btn-sm mt-2'>Buy Now</button>
                    </div>
                </div>
            </div>
            <div className='banner m-5 '>
                <div className="row">
                    <div className="col-6 mt-5 pt-5 d-flex flex-column align-items-center justify-content-center">
                        <h1 className='display-2'>OnePlus 10T</h1>
                        <p className=''>Snapdragon 8+ Gen</p>
                        
                        <h2 className=''>From *39,999  |  8GB + 128GB</h2>
                        <button className='btn btn-sm btn-dark mt-2'>Buy Now</button>
                    </div>
                    <div className="col-6  ">
                        <img src="/images/banner/oneplus10t.png" alt="realme" style={{float:'right'}} className='img-fluid rounded-4 shadow'/>
                    </div>
                </div>
            </div>
            <div className='banner m-5'>
                <div className="row">
                    <div className="col-6">
                        <img src="/images/banner/realme 11.png" alt="realme" className='img-fluid rounded-4 shadow'/>
                    </div>
                    <div className="col-6 mt-5 pt-5 d-flex flex-column align-items-center justify-content-center">
                        <h1 className='display-2'>realme 11 5G</h1>
                        <p className=''>108MP and 67W Charging</p>
                        
                        <h2 className=''>From *14,999  |  8GB + 128GB</h2>
                        <button className='btn btn-dark btn-sm mt-2'>Buy Now</button>
                    </div>
                </div>
            </div>
        </section>
        
        {/* budget mobiles */}
        <section className='budget w-100 p-5 border-bottom'>
            <h1 className='text-center'>Best Budget Mobiles 2023</h1>
            <div className="container-fluid d-flex justify-content-evenly row flex-wrap py-2 gap-3">
                {
                    budget.map(m => (
                    <div className="box col-lg-3 col-xs-12 shadow rounded-5" key={m.id}>
                        <div className="img_box p-5 d-flex justify-content-center">
                            <img src={m.img} alt={m.title} width={200} height={250}/>
                        </div>
                        <div className="detail m-auto p-3 w-100 ps-5">
                            <h4>{m.title}</h4>
                            <p>{m.ram}</p>
                            <p>{m.cam}</p>
                            <p>{m.bat}</p>
                            <h5> &#8377; { m.price}</h5>
                        </div>
                        </div>
                    ) )
                }
            </div>
        </section>

        {/* services */}
        <section className='services container-fluid  w-100 flex-column  p-3 mt-5'>
            <div className="d-flex row align-items-center justify-content-center gap-3 m-3">
                <div className="box grey col-lg-5 d-flex p-4 rounded-5">
                    <img src="/images/shipping.svg" alt="shipping" width={50} className='mx-4'/>
                    <p className='mt-3'><strong>Free Shipping</strong><br />Available for orders above ₹ 500</p>
                </div>
                <div className="box grey col-lg-5 d-flex p-4 rounded-5">
                    <img src="/images/cod.svg" alt="delivery" width={50} className='mx-4'/>
                    <p className='mt-3'><strong>Cash On Delivery</strong><br />Supports Payments on Delivery</p>
                </div>
            </div>
            <div className="d-flex row align-items-center justify-content-center gap-3 m-3">
                <div className="box grey col-lg-5 d-flex p-4 rounded-5">
                    <img src="/images/secure.svg" alt="secure" width={60} className='mx-4 '/>
                    <p className='mt-3'><strong>Secure Payment</strong><br />offers various payment options</p>
                </div>
                <div className="box grey col-lg-5 d-flex p-4 rounded-5">
                    <img src="/images/warranty.svg" alt="warranty" width={60} className='mx-4'/>
                    <p className='mt-3'><strong>Warranty Policy</strong><br />This warranty policy applies only in India</p>
                </div>
            </div>
        </section>
<hr className='m-3'/>
        <section className='supports my-5'>
            <div className='text-center mb-3'>
                <button className='btn btn-outline-dark rounded-5 fs-4 px-5 py-2'><i className="fa-solid fa-phone me-3"></i>Customer Care</button>
            </div>
            <div className='text-center'>
                <p>9.00 - 21.00, MON-SUN <br />including Holidays <br /><br /><strong className='fs-3'>1800 444 9999</strong></p>
            </div>
        </section>
        
    </main>
    </>
    )
}

export default Home